import akka.actor.typed.ActorSystem
import akka.actor.typed.scaladsl.Behaviors
import org.slf4j.{Logger, LoggerFactory}

import scala.util.Try


object Main {

  def main(args: Array[String]): Unit = {

  implicit val log: Logger = LoggerFactory.getLogger(getClass)

  val rootBehavior = Behaviors.setup[Nothing] { context =>

    val reviews1: List[Review] = List(
      Review(5, "comment1"),
      Review(4, "comment2")
    )
    val reviews2: List[Review] = List(
      Review(5, "comment3"),
      Review(5, "comment4")
    )
    val reviews3: List[Review] = List(
      Review(2, "comment5"),
      Review(2, "comment6")
    )
    val reviews4: List[Review] = List(
    Review(3, "comment7"),
    Review(4, "comment8")
    )

    val addresses: Seq[Book] = Seq(
      Book("1", "book1", "Action", true, reviews1),
      Book("2", "book2", "Drama", false, reviews2),
      Book("3", "book3", "Action", true, reviews3),
      Book("4", "book4", "Fantasy", true, reviews4)
    )

    val AddressBookRepository = new InMemoryAddressBookRepository(addresses)(context.executionContext)
    val router = new MyRouter(AddressBookRepository)(context.system, context.executionContext)

    val host = "0.0.0.0"
    val port = Try(System.getenv("PORT")).map(_.toInt).getOrElse(9000)

    Server.startHttpServer(router.route, host, port)(context.system, context.executionContext)
    Behaviors.empty
  }
  val system = ActorSystem[Nothing](rootBehavior, "HelloAkkaHttpServer")
}

}
