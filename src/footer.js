import  React, {useContext} from "react";
import { ThemeContext } from "./exportar";

function Footer(){
  const theme = useContext(ThemeContext);
  const classFooter = 'card pt-4 footer-' + theme;
  return(
  <div className={classFooter} >
    <div className="card-header text-center texto1">
      CDS
    </div>
    <div className="card-body">
      <blockquote className="blockquote mb-0 texto1">
        <p>Stop talking and start innovation.</p>
          <footer className="blockquote-footer text-center texto1"><cite title="Source Title">© Company, Inc. All rights reserved.</cite></footer>
      </blockquote>
    </div>
  </div>
);
}

export default Footer;