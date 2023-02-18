import { HOME_PAGE_LINK,BEST_SELLERS_LINK,OUR_DESIGNERS_LINK,SNEAKERS_BRANDS_LINK,LOGIN_LINK, BEST_SELLERS_PAGE } from "./services/domServices.js";
import PAGES from "./models/pageModel.js";
import { onChangePage } from "./routes/router.js";

/****האזנה לאירועים*****/

HOME_PAGE_LINK.addEventListener("click", ()=>onChangePage(PAGES.HOME));
BEST_SELLERS_LINK.addEventListener("click",()=>onChangePage(PAGES.BEST_SELLERS));
OUR_DESIGNERS_LINK.addEventListener("click",()=>onChangePage(PAGES.OUR_DESIGNERS));
SNEAKERS_BRANDS_LINK.addEventListener("click",()=>onChangePage(PAGES.SNEAKERS_BRANDS));
LOGIN_LINK.addEventListener('click',()=>onChangePage(PAGES.LOGIN));