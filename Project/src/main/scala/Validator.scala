trait Validator[T] {
  def validate(t: T): Option[ApiError]
}

object CreateAddressBookValidator extends Validator[CreateBook] {
  def validate(createAddressBook: CreateBook): Option[ApiError] =
    if (createAddressBook.name.isEmpty)
      Some(ApiError.emptyTitleField)
    else
      None
}

object UpdateAddressBookValidator extends Validator[UpdateBook] {

  def validate(updateAddressBook: UpdateBook): Option[ApiError] =
    if (updateAddressBook.category.exists(_.isEmpty))
      Some(ApiError.emptyTitleField)
    else
      None
}