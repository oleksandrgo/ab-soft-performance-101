package base

import scala.util.Random
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
import scala.concurrent.duration._
import base.Configs._
import base.Requests._
import base.Helpers._

object Helpers {
  val r = new scala.util.Random
  val randomID = r.nextInt(99);
  val start = 2
  val end   = 5
  val productAmount = start + r.nextInt( (end - start) + 1 )

  val clearCashAndCookies = scenario("Clear cash and cookies")
    .exec(flushHttpCache)
    .exec(flushSessionCookies)

}
