package base

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
import scala.concurrent.duration._
import base.Configs._
import base.Requests._
import base.Helpers._

class Scenario extends Simulation{
  val httpProtocol = http.baseUrl(url);
  before {
    clearCashAndCookies
  }
  val openHomePage = scenario("Open home page")
    .exec(getToken)
    .exec(checkToken)
    .exec((addCookie(Cookie("token","${token}"))))
    .repeat(5){
      exec(getAllProducts)
    };

  val viewAllProducts = scenario("View All products")
    .exec(getToken)
    .exec(checkToken)
    .exec((addCookie(Cookie("token","${token}"))))
    .exec(getAllProducts);

  val viewProductDetail = scenario("View product detail")
      .exec(getToken)
      .exec(checkToken)
      .exec((addCookie(Cookie("token","${token}"))))
      .exec(getAllProducts)
      .exec(getProductById);

  val addProductToCard = scenario("Add products to card")
    .exec(getToken)
    .exec(checkToken)
    .exec((addCookie(Cookie("token","${token}"))))
    .exec(getAllProducts)
    .repeat(productAmount){
      exec(addProduct)
    }

  val viewCart = scenario("View cart")
    .exec(getToken)
    .exec(checkToken)
    .exec((addCookie(Cookie("token","${token}"))))
    .exec(getAllProducts)
    .repeat(productAmount){
      exec(addProduct)
    }
    .exec(getCartItems)

  val clearCart = scenario("View cart")
    .exec(getToken)
    .exec(checkToken)
    .exec((addCookie(Cookie("token","${token}"))))
    .exec(getAllProducts)
    .repeat(productAmount){
      exec(addProduct)
    }
    .exec(checkout)

  after{
    clearCashAndCookies
  }

  //todo
  //val scn2 = scenario("Ly ly").doSwitch((1,getToken),(2,checkToken))
  //val scn2 = scenario("Ly ly") randomSwitch((1,getToken),(2,checkToken))

  setUp(
    //openHomePage.inject(rampUsers(1000) during(3600 seconds)).protocols(httpProtocol),
    //viewAllProducts.inject(rampUsers(1400) during(3600 seconds)).protocols(httpProtocol),
    //viewProductDetail.inject(rampUsers(1800) during(3600 seconds)).protocols(httpProtocol),
    //addProductToCard.inject(rampUsers(400) during(3600 seconds)).protocols(httpProtocol),
    //viewCart.inject(rampUsers(240) during(3600 seconds)).protocols(httpProtocol),
    //clearCart.inject(rampUsers(80) during(3600 seconds)).protocols(httpProtocol)
  )
}
