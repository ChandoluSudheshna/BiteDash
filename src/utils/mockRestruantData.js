const MOCK_MENU_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      /* ---------- RESTAURANT NAME ---------- */
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Pizza Hut"
          }
        }
      },

      /* ---------- RESTAURANT INFO ---------- */
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "447828",
              name: "Pizza Hut",
              city: "Hyderabad",
              cuisines: ["Pizzas"],
              avgRating: 4.4,
              costForTwoMessage: "₹350 for two",
              totalRatingsString: "4K+ ratings",
              sla: {
                deliveryTime: 26,
                slaString: "25-30 MINS"
              }
            }
          }
        }
      },

      /* ---------- MENU ---------- */
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                /* ---------- CATEGORY ---------- */
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135322682",
                              name: "Melts 3 Course Meal for 1 - Veg",
                              category: "Appetizers",
                              description:
                                "Serves 1 | Choose your favourite veg melts with fries and Pepsi",
                              imageId: "FOOD_CATALOG/veg_meal.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30900,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "2"
                                }
                              }
                            }
                          }
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114798844",
                              name: "Sprinkled Fries - New",
                              category: "Appetizers",
                              description:
                                "Baked fries seasoned with signature peruvian seasoning",
                              imageId: "FOOD_CATALOG/fries.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 10900,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "97"
                                }
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                },

                /* ---------- CATEGORY ---------- */
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "New Flatzz Pizzas - Light Crust, Big Flavour",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "190191795",
                              name: "Paneer Makhni Masala Flatzz Pizza",
                              category:
                                "New Flatzz Pizzas - Light Crust, Big Flavour",
                              description:
                                "Mozzarella, masala paneer, onions & makhni sauce",
                              imageId: "FOOD_CATALOG/paneer_flatzz.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 55900,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "33"
                                }
                              }
                            }
                          }
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "190191800",
                              name: "Overloaded Veggies Flatzz Pizza",
                              category:
                                "New Flatzz Pizzas - Light Crust, Big Flavour",
                              description:
                                "Capsicum, onion, corn, olives & jalapenos",
                              imageId: "FOOD_CATALOG/veg_flatzz.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 55900,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "33"
                                }
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ]
  }
};

export default MOCK_MENU_DATA;
