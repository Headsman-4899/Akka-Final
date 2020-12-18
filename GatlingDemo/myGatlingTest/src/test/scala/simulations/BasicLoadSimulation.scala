package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class BasicLoadSimulation extends Simulation {

  val httpConf = http.baseUrl("http://localhost:9000/")
    .header("Accept", "application/json")

  def getAllBooks() = {
    exec(
      http("Get all books")
        .get("allbooks")
        .check(status.is(200))
    )
  }

  def getSpecificBook() = {
    exec(
      http("Get Specific book")
        .get("allbooks/2")
        .check(status.is(200))
    )
  }

  def deleteSpecificBook() = {
    exec(
      http("delete Specific book")
        .delete("allbooks/3")
        .check(status.is(200))
    )
  }

  val scn = scenario("Basic Load Simulation")
    .exec(getAllBooks())
    .pause(5)
    .exec(getSpecificBook())
    .pause(5)
    .exec(getAllBooks())

  setUp(
    scn.inject(
      nothingFor(5 seconds),
      constantUsersPerSec(10) during (10 seconds),
      rampUsersPerSec(1) to (5) during (20 seconds)
    ).protocols(httpConf)
  )
}