package base

import io.gatling.core.Predef.jsonPath
import io.gatling.http.Predef.{http, status}
import base.Configs._
import base.Helpers._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef.jdbcFeeder

object Requests {



   val getToken = http("Get token").
    get(autPort + "/api/auth/generate_token").
    check(status.is(200)).
    check(jsonPath("$.token").saveAs("token"));

  val checkToken = http("Check Token").
    get(autPort + "/api/auth/validate_token/" + "${token}").
    check(status.is(200));

  val getAllProducts = http("Get all products").
    get(productPort + "/api/products/get_all").
    check(status.is(200)).
    check(jsonPath("$["+ randomID +"]._id").saveAs("id"))

  val getProductById = http("Get product by id").
    get(productPort+"/api/products/get_product/"+"${id}").
    check(status.is(200))

  val getCartItems = http("Get cart items")
    .get(cartPort+"api/cart/get_items")
    .check(status.is(200))

  val addProduct = http("Add product to cart")
    .get(cartPort+"/api/cart/add_item/"+"${id}")
    .check(status.is(200))

  val checkout = http("Checkout")
    .get(cartPort+"/api/cart/checkout")
    .check(status.is(200))


}
