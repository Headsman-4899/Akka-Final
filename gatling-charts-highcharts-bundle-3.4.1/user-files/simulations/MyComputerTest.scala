
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class MyComputerTest extends Simulation {

	val httpProtocol = http
		.baseUrl("http://computer-database.gatling.io")
		.inferHtmlResources()
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36")

	val headers_0 = Map("Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map(
		"Accept" -> "text/css,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7")



	val scn = scenario("MyComputerTest")
		.exec(http("request_0")
			.get("/computers")
			.headers(headers_0)
			.resources(http("request_1")
			.get("/assets/css/bootstrap.min.css")
			.headers(headers_1),
            http("request_2")
			.get("/assets/css/main.css")
			.headers(headers_1)))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}