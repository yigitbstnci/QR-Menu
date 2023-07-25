const menu = [
    {
      id: 1,
      title: "Americano",
      category: "Espresso",
      price: 57,
      img: '' ,
      desc:'',
    },
    {
      id: 2,
      title: "Flat White",
      category: "Espresso",
      price: 59.99,
      img:
        "",
      desc: '',
    },
    {
      id: 3,
      title: "White Mocha",
      category: "Espresso",
      price: 85 ,
      img:
        "",
      desc:'',
    },
    {
      id: 4,
      title: "Latte",
      category: "Espresso",
      price: 59.99,
      img:
        '',
      desc:'',
    },
    {
      id: 5,
      title: "Frozen",
      category: "Iced",
      price: 75,
      img:
        '',
      desc: `Mango,Çilek,Kavun,Muz,Karpuz `,
    },
    {
      id: 6,
      title: "Ice Berry latte",
      category: "Iced",
      price: 33,
      img:
        "",
      desc: ``,
    },
    {
      id: 7,
      title: "Ice Filter",
      category: "Iced",
      price: 85,
      img:
        "",
      desc: ``,
    },
    {
      id: 8,
      title: "Just Water",
      category: "Soft",
      price: 15,
      img:
        "",
      desc: ``,
    },
    {
      id: 9,
      title: "Orange Kola",
      category: "Soft",
      price: 5,
      img:
        "",
      desc: `Special for construction sites`,
    },
    
  ];
  
  const section = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  
  const categoryList = () => {
    const categoryBtns = categories
      .map((category) => {
        return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    //Menüden basıldığında spesifik ürün getiren kısım
    const filterBtns = document.querySelectorAll(".btn-item");
  
    //filter menu
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory = menu.filter((menuItem) => {
          // click menu button show list when if it has category 
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          menuList(menu);
        } else {
          menuList(menuCategory);
        }
      });
    });
  };
  
  const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
      return `<div class="menu-items col-lg-12 col-sm-12">
             <!-- <img
                src=${item.img}
                alt=${item.title}
                class="photo"
              /> -->
              <div class="menu-info">
                <div class="menu-title">
                  <h4> ${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
      `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
  };
  
  menuList(menu);
  categoryList();