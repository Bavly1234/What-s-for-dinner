var recipes = [

    {
        title: "Margherita Pizza",
        Img: "./images/food1.jpg",
        rating: 4.8,
        reviews: 520,
        prepTime: 20,
        cookTime: 15,
        servings: 2,
        level: "Easy",
        cuisine: "Italian",
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella",
            "Fresh basil leaves",
            "Olive oil",
            "Salt",
            "Black pepper"
        ],
        instruction: [
            "Spread tomato sauce over the dough.",
            "Add mozzarella slices.",
            "Bake at high heat for 12–15 minutes.",
            "Top with fresh basil and serve."
        ],
        nutrition: {
            calories: 430,
            protein: "20g",
            carbs: "50g",
            fat: "15g",
            fiber: "3g",
            sodium: "820mg"
        },
        chefTips: [
            "Use high-quality mozzarella for best flavor.",
            "Bake on a preheated pizza stone for a crisp base.",
            "Add basil only after baking to keep it fresh."
        ]
    },

    {
        title: "Chicken Alfredo Pasta",
        Img: "./images/food2.avif",
        rating: 4.6,
        reviews: 398,
        prepTime: 10,
        cookTime: "25 min",
        servings: 3,
        level: "Easy",
        cuisine: "American",
        ingredients: [
            "Pasta",
            "2 chicken breasts",
            "1 cup heavy cream",
            "1 cup parmesan",
            "Garlic",
            "Butter",
            "Salt",
            "Black pepper"
        ],
        instruction: [
            "Cook pasta until al dente.",
            "Sear chicken and slice.",
            "Simmer cream and parmesan until thick.",
            "Mix pasta with sauce and add chicken."
        ],
        nutrition: {
            calories: 690,
            protein: "35g",
            carbs: "48g",
            fat: "38g",
            fiber: "2g",
            sodium: "600mg"
        },
        chefTips: [
            "Reserve some pasta water to adjust sauce thickness.",
            "Use freshly grated parmesan, not pre-shredded.",
            "Sear chicken well for deeper flavor."
        ]
    },

    {
        title: "Beef Tacos",
        Img: "./images/food3.avif",
        rating: 4.9,
        reviews: 1120,
        prepTime: 50,
        cookTime: "10 min",
        servings: 4,
        level: "Easy",
        cuisine: "Mexican",
        ingredients: [
            "Ground beef",
            "Taco seasoning",
            "Tortillas",
            "Lettuce",
            "Cheese",
            "Tomatoes",
            "Onions",
            "Sour cream"
        ],
        instruction: [
            "Cook beef with taco seasoning.",
            "Warm tortillas.",
            "Assemble tacos with toppings.",
            "Serve immediately."
        ],
        nutrition: {
            calories: 520,
            protein: "26g",
            carbs: "42g",
            fat: "24g",
            fiber: "4g",
            sodium: "930mg"
        },
        chefTips: [
            "Toast tortillas for extra flavor.",
            "Drain excess fat from beef for cleaner taste.",
            "Prepare toppings ahead for quick assembly."
        ]
    },

    {
        title: "Greek Salad",
        Img: "./images/food5.avif",
        rating: 4.5,
        reviews: 310,
        prepTime: 10,
        cookTime: "0 min",
        servings: 2,
        level: "Easy",
        cuisine: "Greek",
        ingredients: [
            "Tomatoes",
            "Cucumbers",
            "Feta cheese",
            "Olives",
            "Onions"
        ],
        instruction: [
            "Chop vegetables.",
            "Add feta and olives.",
            "Drizzle with olive oil.",
            "Serve fresh."
        ],
        nutrition: {
            calories: 220,
            protein: "6g",
            carbs: "10g",
            fat: "18g",
            fiber: "3g",
            sodium: "540mg"
        },
        chefTips: [
            "Use high-quality olive oil for best taste.",
            "Chill ingredients before serving.",
            "Add feta at the end to keep it from crumbling too much."
        ]
    },

    {
        title: "Butter Chicken",
        Img: "./images/food5.avif",
        rating: 4.9,
        reviews: 950,
        prepTime: 25,
        cookTime: "35 min",
        servings: 4,
        level: "Intermediate",
        cuisine: "Indian",
        ingredients: [
            "Chicken thighs",
            "Tomato puree",
            "Cream",
            "Butter",
            "Garam masala",
            "Garlic",
            "Ginger",
            "Chili powder",
            "Cumin",
            "Salt"
        ],
        instruction: [
            "Cook chicken with spices.",
            "Simmer tomato puree.",
            "Add cream and butter.",
            "Combine and simmer 10 minutes."
        ],
        nutrition: {
            calories: 520,
            protein: "30g",
            carbs: "12g",
            fat: "40g",
            fiber: "2g",
            sodium: "700mg"
        },
        chefTips: [
            "Marinate chicken overnight for deeper flavor.",
            "Simmer sauce slowly to develop richness.",
            "Use butter generously for authentic taste."
        ]
    },

    {
        title: "Sushi Rolls",
        Img: "./images/food6.avif",
        rating: 4.4,
        reviews: 210,
        prepTime: 50,
        cookTime: "20 min",
        servings: 3,
        level: "Hard",
        cuisine: "Japanese",
        ingredients: [
            "Sushi rice",
            "Nori sheets",
            "Cucumber",
            "Avocado",
            "Salmon",
            "Rice vinegar",
            "Sesame seeds",
            "Soy sauce"
        ],
        instruction: [
            "Cook sushi rice.",
            "Spread rice on nori.",
            "Add filling ingredients.",
            "Roll tightly and slice."
        ],
        nutrition: {
            calories: 350,
            protein: "15g",
            carbs: "52g",
            fat: "8g",
            fiber: "4g",
            sodium: "400mg"
        },
        chefTips: [
            "Keep hands wet to prevent rice from sticking.",
            "Use a bamboo mat for tighter rolls.",
            "Slice rolls with a wet sharp knife."
        ]
    },

    {
        title: "Pad Thai",
        Img: "./images/food7.avif",
        rating: 4.7,
        reviews: 611,
        prepTime: 45,
        cookTime: "15 min",
        servings: 3,
        level: "Intermediate",
        cuisine: "Thai",
        ingredients: [
            "Rice noodles",
            "Shrimp",
            "Eggs",
            "Bean sprouts",
            "Tamarind sauce",
            "Garlic",
            "Peanuts",
            "Fish sauce",
            "Sugar"
        ],
        instruction: [
            "Soak noodles.",
            "Stir-fry shrimp and eggs.",
            "Add noodles and sauce.",
            "Top with peanuts."
        ],
        nutrition: {
            calories: 420,
            protein: "22g",
            carbs: "56g",
            fat: "12g",
            fiber: "3g",
            sodium: "980mg"
        },
        chefTips: [
            "Do not over-soak the noodles to avoid mushiness.",
            "Cook on high heat for authentic texture.",
            "Add lime juice before serving for freshness."
        ]
    },

    {
        title: "Falafel Wrap",
        Img: "./images/food8.avif",
        rating: 4.6,
        reviews: 290,
        prepTime: 15,
        cookTime: "10 min",
        servings: 2,
        level: "Easy",
        cuisine: "Middle Eastern",
        ingredients: [
            "Falafel balls",
            "Tahini",
            "Pita bread",
            "Lettuce",
            "Tomatoes",
            "Pickles",
            "Parsley"
        ],
        instruction: [
            "Warm pita bread.",
            "Add falafel and veggies.",
            "Drizzle tahini.",
            "Wrap and serve."
        ],
        nutrition: {
            calories: 480,
            protein: "14g",
            carbs: "58g",
            fat: "18g",
            fiber: "9g",
            sodium: "820mg"
        },
        chefTips: [
            "Use freshly fried falafel for best texture.",
            "Toast the pita slightly for extra flavor.",
            "Add tahini last to avoid sogginess."
        ]
    },

    {
        title: "Chocolate Brownies",
        Img: "./images/food1.jpg",
        rating: 4.9,
        reviews: 2000,
        prepTime: 40,
        cookTime: "25 min",
        servings: 6,
        level: "Easy",
        cuisine: "American",
        ingredients: [
            "Dark chocolate",
            "Butter",
            "Sugar",
            "Flour",
            "Eggs",
            "Vanilla",
            "Cocoa powder",
            "Salt"
        ],
        instruction: [
            "Melt chocolate and butter.",
            "Mix with sugar and eggs.",
            "Fold in flour.",
            "Bake until fudgy."
        ],
        nutrition: {
            calories: 320,
            protein: "4g",
            carbs: "42g",
            fat: "15g",
            fiber: "2g",
            sodium: "160mg"
        },
        chefTips: [
            "Do not overbake to keep brownies fudgy.",
            "Use high-quality chocolate for richer taste.",
            "Let brownies cool fully before slicing."
        ]
    },

    {
        title: "Caesar Salad",
        Img: "./images/food2.avif",
        rating: 4.5,
        reviews: 440,
        prepTime: 60,
        cookTime: "0 min",
        servings: 2,
        level: "Easy",
        cuisine: "Italian",
        ingredients: [
            "Romaine lettuce",
            "Croutons",
            "Parmesan",
            "Caesar dressing",
            "Olive oil",
            "Black pepper"
        ],
        instruction: [
            "Chop lettuce.",
            "Add croutons and cheese.",
            "Toss with dressing.",
            "Serve chilled."
        ],
        nutrition: {
            calories: 260,
            protein: "8g",
            carbs: "20g",
            fat: "16g",
            fiber: "3g",
            sodium: "480mg"
        },
        chefTips: [
            "Dry the lettuce well to avoid watery salad.",
            "Use freshly grated parmesan for best flavor.",
            "Add dressing gradually to control the taste."
        ]
    }

];




var oldValue;
var newValue;

changeReciepe()
// console.log(newValue)

function changeReciepe() {
    newValue = Math.floor(Math.random() * recipes.length);
    while (newValue === oldValue) {
        newValue = Math.floor(Math.random() * recipes.length);
    }
    oldValue = newValue;
    // console.log(newValue);
    var ingredients = ""
    var instr = ""
    var tips = ""
    for (let i = 0; i < recipes[newValue].ingredients.length; i++) {
        ingredients += `
        <li class="d-flex align-items-start mb-3">
                                        <div
                                            class="num-circle d-flex align-items-center justify-content-center rounded-circle text-white me-3">
                                            ${i + 1}</div>
                                        <span class="text-body">${recipes[newValue].ingredients[i]}</span>
                                    </li>
        `
    }
    for (let i = 0; i < recipes[newValue].instruction.length; i++) {
        tips += `
   <div class="d-flex align-items-start p-4 bg-chef rounded-3 border-start border-4 border-chef">
    <i class="fa-solid fa-circle-check text-chef fs-4 me-3 mt-1"></i>
    <p class="text-secondary mb-0"> ${recipes[newValue].chefTips[i]}</p>
  </div>

       `
        for (let i = 0; i < recipes[newValue].instruction.length; i++) {
            instr += `
              <div class="d-flex align-items-start mb-4 ms-3">
                                    <div class="step-box me-3">${i + 1}</div>
                                    <div class="flex-grow-1 pt-2">
                                        <p class="text-body">
                                            ${recipes[newValue].instruction[i]}
                                        </p>
                                    </div>
                                </div>
       `
        }


        document.getElementById("demo").innerHTML = ` <div class="row content bg-white g-0">
                <div class="col-md-5">
                    <div class="box-img h-100 position-relative">
                        <img src="${recipes[newValue].Img}" class="w-100 h-100 object-fit-cover" alt="">
                        <div class="recipe-info-box p-3 p-md-4  rounded-4 position-absolute start-0 end-0 mx-3 mb-4">
                            <div class="row text-center g-4">

                                <div class="col-4">
                                    <i class="fas fa-clock text-prep fs-4 mb-2"></i>
                                    <p class="text-muted small">Prep Time</p>
                                    <p class="fw-bold text-dark">${recipes[newValue].prepTime} min</p>
                                </div>

                                <div class="col-4">
                                    <i class="fas fa-fire-burner text-cook fs-4 mb-2"></i>
                                    <p class="text-muted small">Cook Time</p>
                                    <p class="fw-bold text-dark">${recipes[newValue].cookTime}</p>
                                </div>

                                <div class="col-4">
                                    <i class="fas fa-users text-serve fs-4 mb-2"></i>
                                    <p class="text-muted small">Servings</p>
                                    <p class="fw-bold text-dark">${recipes[newValue].servings}</p>
                                </div>

                            </div>


                        </div>
                        <div class="position-absolute top-0 start-0 mt-3 ms-3 bg-white rounded-pill px-3 py-2 ">
                            <div class="d-flex align-items-center gap-2">
                                <i class="fa-solid fa-star text-warning small"></i>
                                <span class="fw-semibold text-dark small">${recipes[newValue].rating}</span>
                                <span class="text-muted small">(${recipes[newValue].reviews} reviews)</span>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="col-md-7 scroll h-100 overflow-y-auto ">
                    <div
                        class="d-flex flex-column flex-md-row gap-5 align-items-start justify-content-between mb-2 me-5 ">
                        <div>
                            <span
                                class="badge bg-success-subtle text-success fw-semibold rounded-pill px-3 py-2 mt-4 ms-3">
                                ${recipes[newValue].level}
                            </span>

                            <span class="badge bg-primary-subtle text-primary fw-semibold rounded-pill px-3 py-2">
                                ${recipes[newValue].cuisine}
                            </span>
                            <h3 class="text-dark mb-2 mt-3 ms-3 recipe-title">${recipes[newValue].title}</h3>
                            <p class="recipe-description ms-3">
                                Flavorful Mexican tacos with seasoned ground beef
                            </p>
                        </div>
                        <div class="d-flex gap-2 order-md-0 order-last align-self-end align-self-md-center">
                            <button class="btn action-btn">
                                <i class="fas fa-bookmark"></i>
                            </button>

                            <button class="btn action-btn">
                                <i class="fas fa-share-nodes"></i>
                            </button>
                        </div>
                    </div>

                    <div class="alert-custom mb-5  mx-auto ${recipes[newValue].prepTime >= 45 ? 'd-block' : 'd-none'}"">
                        <div class="d-flex align-items-center">
                           
<div>
                                <p class="fw-semibold text-danger text-sm-md">
                                    Extended Preparation Time
                                </p>

                                <p class="text-danger small text-sm-md-2">
                                    This recipe requires more than 45 minutes to prepare. Plan accordingly!
                                </p>
                            </div>
                        </div>
                    </div>


                    <ul class="nav nav-pills ms-3 mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">Ingredients</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">Instructons</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">Nutrition</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-chef-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-chef" type="button" role="tab" aria-controls="pills-chef"
                                aria-selected="false">
                                Chef's Tips
                            </button>
                        </li>

                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab" tabindex="0">
                            <div class="ingredients-box p-4 rounded-3 mx-auto rounded-5 overflow-y-auto scroll">
                                <ul class="list-unstyled" >
                                    ${ingredients}

                                </ul>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                            aria-labelledby="pills-profile-tab" tabindex="0">
                            <div  class="instructions-wrapper overflow-y-auto scroll">
                               
                            ${instr}
                            
                            </div>


                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                            aria-labelledby="pills-contact-tab" tabindex="0">
                        
                            <div class="row x mx-auto g-3">

  <!-- Calories -->
  <div class="col-12 col-md-6">
    <div class="d-flex align-items-center justify-content-between p-4 bg-light rounded-4">
      <div class="d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-center rounded-3 me-3 nutrition-icon bg-calory">
          <i class="fa-solid fa-fire text-calory"></i>
        </div>
        <span class="text-secondary fw-medium small">Calories</span>
      </div>
            <span class="fs-5 fw-bold text-dark">${recipes[newValue].nutrition.calories} kcal</span>
    </div>
  </div>

  <!-- Protein -->
  <div class="col-12 col-md-6">
    <div class="d-flex align-items-center justify-content-between p-4 bg-light rounded-4">
      <div class="d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-center rounded-3 me-3 nutrition-icon bg-protein">
          <i class="fa-solid fa-dumbbell text-protein"></i>
        </div>
        <span class="text-secondary fw-medium small">Protein</span>
      </div>
            <span class="fs-5 fw-bold text-dark">${recipes[newValue].nutrition.protein}</span>
    </div>
  </div>

  <!-- Carbs -->
  <div class="col-12 col-md-6">
    <div class="d-flex align-items-center justify-content-between p-4 bg-light rounded-4">
      <div class="d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-center rounded-3 me-3 nutrition-icon bg-carbo">
          <i class="fa-solid fa-wheat-awn text-carbo"></i>
        </div>
        <span class="text-secondary fw-medium small">Carbohydrates</span>
      </div>
            <span class="fs-5 fw-bold text-dark">${recipes[newValue].nutrition.carbs}</span>
    </div>
  </div>

  <!-- Fat -->
  <div class="col-12 col-md-6">
    <div class="d-flex align-items-center justify-content-between p-4 bg-light rounded-4">
      <div class="d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-center rounded-3 me-3 nutrition-icon bg-fat">
          <i class="fa-solid fa-droplet text-fat"></i>
        </div>
        <span class="text-secondary fw-medium small">Fat</span>
      </div>
            <span class="fs-5 fw-bold text-dark">${recipes[newValue].nutrition.fat}</span>
    </div>
  </div>

  <!-- Fiber -->
  <div class="col-12 col-md-6">
    <div class="d-flex align-items-center justify-content-between p-4 bg-light rounded-4">
      <div class="d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-center rounded-3 me-3 nutrition-icon bg-fiber">
          <i class="fa-solid fa-seedling text-fiber"></i>
        </div>
        <span class="text-secondary fw-medium small">Fiber</span>
      </div>
            <span class="fs-5 fw-bold text-dark">${recipes[newValue].nutrition.fiber}</span>
    </div>
  </div>

  <!-- Sodium -->
  <div class="col-12 col-md-6">
    <div class="d-flex align-items-center justify-content-between p-4 bg-light rounded-4">
      <div class="d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-center rounded-3 me-3 nutrition-icon bg-sodium">
          <i class="fa-solid fa-cube text-sodium"></i>
        </div>
        <span class="text-secondary fw-medium small">Sodium</span>
      </div>
            <span class="fs-5 fw-bold text-dark">${recipes[newValue].nutrition.sodium}</span>
    </div>
  </div>

</div>

                        
                        </div>
                        <div class="tab-pane fade ms-3" id="pills-chef" role="tabpanel" aria-labelledby="pills-chef-tab"
                            tabindex="0">
<div  class="vstack gap-3 t mx-auto">

${tips}
</div>
                        </div>

                    </div>

       <button  onclick="changeReciepe()"
        class="btn try-btn d-flex align-items-center justify-content-center gap-2 fw-semibold shadow-lg  mt-5 ms-3">
    <i class="fa-solid fa-rotate"></i>
    Try Another Recipe
</button>

                </div>
            </div>`


    }
}

