import java.util.UUID

import AddressBookRepository.AddressBookNotFound

import scala.concurrent.{ExecutionContext, Future}

trait AddressBookRepository {
  def all(): Future[Seq[Book]]
  def done(): Future[Seq[Book]]
  def pending(): Future[Seq[Book]]
  def create(createTodo:CreateBook): Future[Book]
  def update(id: String, updateBook: UpdateBook): Future[Book]
  def getAddressBook(id: String): Future[Option[Book]]
  def deleteAddressBook(id: String): Future[Unit]
  def getCategory(category: String): Future[Seq[Book]]
}


object AddressBookRepository {
  final case class AddressBookNotFound(id: String) extends Exception(s"Address Book with id $id not found.")
}

class InMemoryAddressBookRepository(initialAddresses: Seq[Book] = Seq.empty)(implicit ec: ExecutionContext) extends AddressBookRepository {

  private var Addresses: Vector[Book] = initialAddresses.toVector

  override def all(): Future[Seq[Book]] = Future.successful(Addresses)

  override def done(): Future[Seq[Book]] = Future.successful(Addresses.filter(_.done))

  override def pending(): Future[Seq[Book]] = Future.successful(Addresses.filterNot(_.done))

  override def create(createAddressBook: CreateBook): Future[Book] = Future.successful {
    val address = Book(
      id = UUID.randomUUID().toString,
      name = createAddressBook.name,
      category = createAddressBook.category,
      reviews = createAddressBook.reviews,
      done = createAddressBook.done
    )
    Addresses = Addresses :+ address
    address
  }

  override def update(id: String, updateBook: UpdateBook): Future[Book] = {
    Addresses.find(_.id == id) match {
      case Some(foundBook) =>
        val newBook = updateHelper(foundBook, updateBook)
        Addresses = Addresses.map(t => if (t.id == id) newBook else t)
        Future.successful(newBook)
      case None =>
        Future.failed(AddressBookNotFound(id))
    }
  }

  private def updateHelper(addressBook: Book, updateBook: UpdateBook): Book = {
    //val t3 = updateAddressBook.id.map(id => addressBook.copy(id = id.toString))
    val t1 = updateBook.name.map(name => addressBook.copy(name = name)).getOrElse(addressBook)
    val t2 = updateBook.category.map(category => t1.copy(category = category)).getOrElse(t1)
    updateBook.done.map(done => t2.copy(done = done)).getOrElse(t2)
  }

  override def getAddressBook(id: String): Future[Option[Book]] = Future.successful {
    Addresses.find(_.id == id)
  }

  override def deleteAddressBook(id: String): Future[Unit] = Future.successful {
    Addresses = Addresses.filterNot(_.id == id)
  }

  override def getCategory(category: String): Future[Seq[Book]] = Future.successful {
    Addresses.filter(_.category == category)
  }

}