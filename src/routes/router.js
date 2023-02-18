import PAGES from "../models/pageModel.js";
import { HOME_PAGE,BEST_SELLERS_PAGE,OUR_DESIGNERS_PAGE,SNEAKERS_BRANDS_PAGE,LOGIN_PAGE } from "../services/domServices.js";

export const onChangePage= page=>{
    HOME_PAGE.className="d-none";
    BEST_SELLERS_PAGE.className="d-none";
    OUR_DESIGNERS_PAGE.className="d-none";
    SNEAKERS_BRANDS_PAGE.className="d-none";
    LOGIN_PAGE.className="d-none";


    if(page===PAGES.HOME)return(HOME_PAGE.className="d-block");
    if(page===PAGES.BEST_SELLERS)return(BEST_SELLERS_PAGE.className="d-block")
    if(page===PAGES.OUR_DESIGNERS)return(OUR_DESIGNERS_PAGE.className="d-block")
    if(page===PAGES.SNEAKERS_BRANDS)return(SNEAKERS_BRANDS_PAGE.className="d-block")
    if(page===PAGES.LOGIN)return(LOGIN_PAGE.className="d-block")
}