package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CheckResponseBodyAndExtract extends Simulation {

  val httpConf = http.baseUrl("http://localhost:8080/app/")
    .header("Accept", "application/json")

  val scn = scenario("Check JSON Path")

    // First call - check the name of the game
    .exec(http("Get specific game")
      .get("videogames/1")
      .check(jsonPath("$.name").is("Resident Evil 4")))

    // Second call - extract the ID of a game and save it to a variable called gameId
    .exec(http("Get all video games")
      .get("videogames")
      .check(jsonPath("$[1].id").saveAs("gameId")))

    // Third call - use the gameId variable saved from the above call
//    .exec(http("Get specific game")
//      .get("videogames/${gameId}")
//      .check(jsonPath("$.name").is("Gran Turismo 3"))
//
//      setUp(
//      scn.inject(atOnceUsers(1))
//      ).protocols(httpConf)

}