import "@assets/css/main.css";
import "@assets/css/main.css.map";
import { Link } from "react-router-dom";
const Layout = (props) => {
  const {routes} = props;

  const expand = () => {
    const left = document.querySelector('.left');
    if (left.classList.contains('show')) {
      left.classList.remove('show')
    }
    else {
      left.classList.add('show')
    }
  }

  const openMenu = (event) => {
    var currentmenuItem = event.currentTarget;

    if (currentmenuItem.classList.contains('open')) {
      currentmenuItem.classList.remove('open');
    } else {
      currentmenuItem.classList.add('open');
    }
  }

  const nextPage = (item) =>{
  }
  const renderItem = (item,key) =>{
    const srcImg = `./../assets/${item.icon}.svg`
    return (

      <li 
        key={key} 
        className="left__menuItem" 
        //onClick={(event) => openMenu(event)}
        onClick={(item?.child?.length) ? (event) => openMenu(event) : () =>nextPage(item)}
        >
      <Link to={item.path} key={key}>
      <div 
        className="left__title"
      >
        <img 
          src={srcImg}
          alt="" 
        />
          {item.name}
        {item?.child?.length && <img 
          className="left__iconDown" 
          src="./../assets/arrow-down.svg" alt="" 
        />}
      </div>

      {item?.child?.length && 
        <div className="left__text">
        {item?.child.map( (item,key) => {
          return (
            <>
            <Link to={item.path} key={key}>
            <div key={key} className="left__link">{item.name}</div>
            </Link>
            </>
          )})}
        </div>
      }
          </Link>
    </li>
    )
  }
  return (
    <div className="left">
      <span className="left__icon" onClick={() => expand()}>
        <span />
        <span />
        <span />
      </span>
      <div className="left__content">
        <div className="left__profile">
          <div className="left__image"><img src="./../assets/logo.png" alt="" /></div>
          <p className="left__name" id="union">Fruit Store</p>
        </div>
        <ul className="left__menu">
          {/* <li className="left__menuItem" onClick={(event) => openMenu(event)}>
            <a href="index.html" className="left__title"><img src="./../assets/icon-dashboard.svg" alt="" />Dashboard</a>
          </li> */}
          {/* <li className="left__menuItem" onClick={(event) => openMenu(event)}>
            <div className="left__title"><img src="./../assets/icon-tag.svg" alt="" />S???n Ph???m<img className="left__iconDown" src="./../assets/arrow-down.svg" alt="" /></div>
            <div className="left__text">
              <a className="left__link" href="insert_product.html">Ch??n S???n Ph???m</a>
              <a className="left__link" href="view_product.html">Xem S???n Ph???m</a>
            </div>
          </li>
          <li className="left__menuItem" onClick={(event) => openMenu(event)}>
            <div className="left__title"><img src="./../assets/icon-edit.svg" alt="" />Danh M???c SP<img className="left__iconDown" src="./../assets/arrow-down.svg" alt="" /></div>
            <div className="left__text">
              <a className="left__link" href="insert_p_category.html">Ch??n Danh M???c</a>
              <a className="left__link" href="view_p_category.html">Xem Danh M???c</a>
            </div>
          </li>
          <li className="left__menuItem" onClick={(event) => openMenu(event)}>
            <div className="left__title"><img src="./../assets/icon-book.svg" alt="" />Th??? Lo???i<img className="left__iconDown" src="./../assets/arrow-down.svg" alt="" /></div>
            <div className="left__text">
              <a className="left__link" href="insert_category.html">Ch??n Th??? Lo???i</a>
              <a className="left__link" href="view_category.html">Xem Th??? Lo???i</a>
            </div>
          </li>
          <li className="left__menuItem" onClick={(event) => openMenu(event)}>
            <div className="left__title"><img src="./../assets/icon-settings.svg" alt="" />Slide<img className="left__iconDown" src="./../assets/arrow-down.svg" alt="" /></div>
            <div className="left__text">
              <a className="left__link" href="insert_slide.html">Ch??n Slide</a>
              <a className="left__link" href="view_slides.html">Xem Slide</a>
            </div>
          </li>
          <li className="left__menuItem" onClick={(event) => openMenu(event)}>
            <div className="left__title"><img src="./../assets/icon-book.svg" alt="" />Coupons<img className="left__iconDown" src="./../assets/arrow-down.svg" alt="" /></div>
            <div className="left__text">
              <a className="left__link" href="insert_coupon.html">Ch??n Coupon</a>
              <a className="left__link" href="view_coupons.html">Xem Coupons</a>
            </div>
          </li>
          <li className="left__menuItem" onClick={(event) => openMenu(event)}>
            <a href="view_customers.html" className="left__title"><img src="./../assets/icon-users.svg" alt="" />Kh??ch H??ng</a>
          </li>
          <li className="left__menuItem" onClick={(event) => openMenu(event)}>
            <a href="view_orders.html" className="left__title"><img src="./../assets/icon-book.svg" alt="" />????n ?????t H??ng</a>
          </li>
          <li className="left__menuItem" onClick={(event) => openMenu(event)}>
            <a href="edit_css.html" className="left__title"><img src="./../assets/icon-pencil.svg" alt="" />Ch???nh CSS</a>
          </li>
          <li className="left__menuItem" onClick={(event) => openMenu(event)}>
            <div className="left__title"><img src="./../assets/icon-user.svg" alt="" />Admin<img className="left__iconDown" src="./../assets/arrow-down.svg" alt="" /></div>
            <div className="left__text">
              <a className="left__link" href="insert_admin.html">Ch??n Admin</a>
              <a className="left__link" href="view_admins.html">Xem Admins</a>
            </div>
          </li>
          <li className="left__menuItem" onClick={(event) => openMenu(event)}>
            <a href className="left__title"><img src="./../assets/icon-logout.svg" alt="" />????ng Xu???t</a>
          </li>
         */}
          {routes.map( (item,key) => renderItem(item,key))}
        </ul>
      </div>
    </div>
  )
}
export default Layout;