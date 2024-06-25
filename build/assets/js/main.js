"use strict";(self.webpackChunkrecycling_challenge=self.webpackChunkrecycling_challenge||[]).push([[792],{918:(t,a,e)=>{var n=e(344);const o=document.createElement("template");o.innerHTML='\n<div class="row">\n  <div id="app-content" class="col-xs-12 col-sm-12 col-md-8 m-auto">\n  </div>\n</div>\n';class d extends HTMLElement{static get observedAttributes(){return["data-step"]}constructor(){super();const t=this.attachShadow({mode:"open"});t.appendChild(o.content.cloneNode(!0));const a=document.createElement("style");a.textContent=n.A;const e=document.createElement("style");e.textContent="@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;700&display=swap');\n:host{\n    --color-1: #004445;\n    --color-2: #9FD5B3;\n    --color-3: #feb70d;\n    --color-4: #b3393b;\n    --color-5: #e6e6e6;\n    --color-light: #fff;\n    --color-dark: #000;\n    --font-family: 'Montserrat', sans-serif;\n    --bs-border-color: #dee2e6;\n    --bs-border-width: 1px;\n}\n\n.form-control:focus {\n\tcolor: var(--bs-body-color);\n\tbackground-color: var(--bs-body-bg);\n\tborder-color: #80a2a2;\n\toutline: 0;\n\tbox-shadow: 0 0 0 0.25em rgba(0, 68, 69, 0.25);\n}\n\n.form-select:focus {\n\tborder-color: #80a2a2;\n\toutline: 0;\n\tbox-shadow: 0 0 0 0.25em rgba(0, 68, 69, 0.25);\n}\n\n#app-content{\n    font-family: var(--font-family);\n}\n.accordion-header{\n    background-color: var(--color-3);\n    color: var(--color-dark);\n}\n.pass-q{\n    color: var(--color-1);\n}\n\n.fail-q{\n    color: var(--color-4);\n}\n\n.logo img{\n    width: 12em;\n    margin: auto;\n}\n\n.alert-danger{\n    background-color: var(--color-1);\n    color: var(--color-light);\n}\n\n.success{\n    background-color: var(--color-2);\n    color: var(--color-dark);\n    padding: 1em;\n}",t.appendChild(a),t.appendChild(e),this.appContent=t.querySelector("#app-content"),this.answers=[],this.stepStack=[]}attributeChangedCallback(t,a,e){this.loadSteps(e)}loadSteps(t){let a=this,e=null,n=this.shadowRoot;switch(t){case"0":this.appContent.innerHTML='\n        <div class="row">\n          <p class="text-center">Welcome to the elegibility checker for the Detroit Down Payment Assistance Program</p>\n          <p class="text-center">You will need to answer a few questions before you can apply for the program.</p>\n        </div>\n        <div class="d-flex">\n          <div class="m-auto">\n            <cod-button data-primary="true" data-size="md" data-disable="undefined" data-label="Start Survey" data-img="" data-img-alt="" data-icon="" data-icon-order="" data-icon-size="" data-shape="undefined" data-aria-label="" data-background-color="primary"></cod-button>\n          </div>\n        </div>\n        ',n.querySelector("cod-button").shadowRoot.querySelector("button").addEventListener("click",(a=>{this.updateStepStack(t),this.setAttribute("data-step","1")}));break;case"1":this.appContent.innerHTML='\n        <div class="row">\n          <p>Have you lived in the City of Detroit for the last 12 months or lost a home to property tax foreclosure in the City of Detroit between 2010-2016?</p>\n        </div>\n        <div class="d-flex">\n          <div class="m-auto">\n            <cod-button data-id="yes" data-label="Yes" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n            <cod-button data-id="no" data-background-color="primary" data-label="No" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n          </div>\n          <div>\n            <cod-button data-id="back" data-label="Back" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>\n          </div>\n        </div>\n        ',e=n.querySelectorAll("cod-button[data-id='yes'], cod-button[data-id='no']"),e.forEach((e=>{e.addEventListener("click",(e=>{null!=e.target.getAttribute("data-label")&&(this.updateStepStack(t),"Yes"==e.target.getAttribute("data-label")?(a.answers.push("pass"),a.setAttribute("data-step","3")):a.setAttribute("data-step","2"))}))})),this.attachBackButtonEvent(n,a);break;case"2":this.appContent.innerHTML='\n        <div class="row">\n          <p><strong>Unfortunately, you may not qualify for the Detroit Downpayment Assistance program because you do not meet the residency requirements.</strong></p>\n          <p>In order to receive this assistance, you must have residency verification documents showing you lived in the City of Detroit for the last 12 months or lost property to tax foreclosure in the City of Detroit between 2010 \u2013 2016.</p>\n          <p>If your circumstances change you may qualify in the future.</p>\n        </div>\n        <div class="d-flex">\n          <div class="ms-auto">\n            <cod-button data-id="back" data-label="Back" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>\n          </div>\n        </div>\n        ',this.attachBackButtonEvent(n,a);break;case"3":this.appContent.innerHTML='\n        <div class="row">\n        <p>Can you produce residency verification documents such as an ID issued at least 12-months prior at a Detroit address, signed lease agreement, 12 months of bill statements with a strong preference for utility bills, etc?</p>\n        </div>\n        <div class="d-flex">\n          <div class="m-auto">\n            <cod-button data-id="yes" data-label="Yes" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n            <cod-button data-id="no" data-background-color="primary" data-label="No" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n          </div>\n          <div>\n            <cod-button data-id="back" data-label="Back" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>\n          </div>\n        </div>\n        ',e=n.querySelectorAll("cod-button[data-id='yes'], cod-button[data-id='no']"),e.forEach((e=>{e.addEventListener("click",(e=>{null!=e.target.getAttribute("data-label")&&(this.updateStepStack(t),"Yes"==e.target.getAttribute("data-label")?(a.answers.push("pass"),a.setAttribute("data-step","4")):a.setAttribute("data-step","2"))}))})),this.attachBackButtonEvent(n,a);break;case"4":this.appContent.innerHTML='\n        <div class="row">\n        <p>Do you make equal to or less than the income for your household size according to this chart?</p>\n        <table class="table">\n            <thead> \n                <tr>\n                    <th>Number of People in Household</th>\n                    <th>Income</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td>$45,180</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td>$61,320</td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td>$77,460</td>\n                </tr>\n                <tr>\n                    <td>4</td>\n                    <td>$93,600</td>\n                </tr>\n                <tr>\n                    <td>5</td>\n                    <td>$109,740</td>\n                </tr>\n                <tr>\n                    <td>6</td>\n                    <td>$125,880</td>\n                </tr>\n                <tr>\n                    <td>7</td>\n                    <td>$142,020</td>\n                </tr>\n                <tr>\n                    <td>8</td>\n                    <td>$158,160</td>\n                </tr>\n            </tbody>\n        </table>\n        </div>\n        <div class="d-flex">\n          <div class="m-auto">\n            <cod-button data-id="yes" data-label="Yes" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n            <cod-button data-id="no" data-background-color="primary" data-label="No" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n          </div>\n          <div>\n            <cod-button data-id="back" data-label="Back" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>\n          </div>\n        </div>\n        ',e=n.querySelectorAll("cod-button[data-id='yes'], cod-button[data-id='no']"),e.forEach((e=>{e.addEventListener("click",(e=>{null!=e.target.getAttribute("data-label")&&(this.updateStepStack(t),"Yes"==e.target.getAttribute("data-label")?(a.answers.push("pass"),a.setAttribute("data-step","6")):a.setAttribute("data-step","5"))}))})),this.attachBackButtonEvent(n,a);break;case"5":this.appContent.innerHTML='\n        <div class="row">\n        <p><strong>Unfortunately, you may not qualify for the Detroit Downpayment Assistance program because you do not meet income requirements.</strong></p>\n        <p>In order to receive this assistance, you must fall within the income guidelines.</p>\n        <p>If your circumstances change you may qualify in the future.</p>\n        </div>\n        <div class="d-flex">\n          <div class="ms-auto">\n            <cod-button data-id="back" data-label="Back" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>\n          </div>\n        </div>\n        ',this.attachBackButtonEvent(n,a);break;case"6":this.appContent.innerHTML='\n        <div class="row">\n          <p>Are you pre-approved by a lender to purchase the property?</p>\n        </div>\n        <div class="d-flex">\n          <div class="m-auto">\n            <cod-button data-id="yes" data-label="Yes" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n            <cod-button data-id="no" data-background-color="primary" data-label="No" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n          </div>\n          <div>\n            <cod-button data-id="back" data-label="Back" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>\n          </div>\n        </div>\n        ',e=n.querySelectorAll("cod-button[data-id='yes'], cod-button[data-id='no']"),e.forEach((e=>{e.addEventListener("click",(e=>{null!=e.target.getAttribute("data-label")&&(this.updateStepStack(t),"Yes"==e.target.getAttribute("data-label")?(a.answers.push("pass"),a.setAttribute("data-step","8")):a.setAttribute("data-step","7"))}))})),this.attachBackButtonEvent(n,a);break;case"7":this.appContent.innerHTML='\n        <div class="row">\n          <p><strong>Unfortunately, you have not completed all the requirements to apply.</strong></p>\n          <p>Please visit our <a href="/departments/housing-and-revitalization-department/detroit-down-payment-assistance-program/am-i-ready">"Am I Ready?</a> page to complete all the pre-requisites.</p>\n        </div>\n        <div class="d-flex">\n          <div class="ms-auto">\n            <cod-button data-id="back" data-label="Back" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>\n          </div>\n        </div>\n        ',this.attachBackButtonEvent(n,a);break;case"8":this.appContent.innerHTML='\n        <div class="row">\n          <p>What is the name of the lender that pre-approved the purchase?</p>\n        </div>\n        <div class="d-flex align-items-end">\n          <form class="m-auto">\n            <label for="lenderName" class="form-label">Lender Name</label>\n            <input type="text" required class="form-control" id="lenderName" aria-describedby="lenderNameHelp">\n            <div id="lenderNameHelp" class="form-text mb-3">The name of the lender that pre-approved the purchase.</div>\n            <cod-button data-id="next" data-background-color="primary" data-label="Next" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n          </form>\n          <div>\n            <cod-button data-id="back" data-label="Back" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>\n          </div>\n        </div>\n        ';n.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();this.appContent.querySelector("input").validity.valid&&(this.updateStepStack(t),a.answers.push("pass"),a.setAttribute("data-step","9"))})),this.attachBackButtonEvent(n,a);break;case"9":this.appContent.innerHTML='\n        <div class="row">\n          <p>Have you attended a homebuyer education course and received a certificate of completion?</p>\n        </div>\n        <div class="d-flex">\n          <div class="m-auto">\n            <cod-button data-id="yes" data-label="Yes" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n            <cod-button data-id="no" data-background-color="primary" data-label="No" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n          </div>\n          <div>\n            <cod-button data-id="back" data-label="Back" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>\n          </div>\n        </div>\n        ',e=n.querySelectorAll("cod-button[data-id='yes'], cod-button[data-id='no']"),e.forEach((e=>{e.addEventListener("click",(e=>{null!=e.target.getAttribute("data-label")&&(this.updateStepStack(t),"Yes"==e.target.getAttribute("data-label")?(a.answers.push("pass"),a.setAttribute("data-step","10")):a.setAttribute("data-step","7"))}))})),this.attachBackButtonEvent(n,a);break;case"10":this.appContent.innerHTML='\n        <div class="row">\n          <p>From which agency did you receive the homebuyer education certifcate?</p>\n        </div>\n        <div class="d-flex align-items-end">\n          <form class="m-auto">\n            <label for="educationAgency" class="form-label">Agency Name</label>\n            <select id="educationAgency" class="form-select" aria-describedby="agencyNameHelp" required>\n              <option value="">Please choose an agency</option>\n              <option value="Abayomi Community Development Corporation">Abayomi Community Development Corporation</option>\n              <option value="Bridging Communities">Bridging Communities</option>\n              <option value="Central Detroit Christian Community Development Corporation (CDC CDC)">Central Detroit Christian Community Development Corporation (CDC CDC)</option>\n              <option value="Detroit Hispanic Development Corporation (DHDC)">Detroit Hispanic Development Corporation (DHDC)</option>\n              <option value="Framework">Framework</option>\n              <option value="Gesher Human Services">Gesher Human Services</option>\n              <option value="Jefferson East, Inc.">Jefferson East, Inc.</option>\n              <option value="Jewish Vocational Services (JVS)">Jewish Vocational Services (JVS)</option>\n              <option value="Matrix Human Services">Matrix Human Services</option>\n              <option value="MiWealth (formerly Southwest Solutions)">MiWealth (formerly Southwest Solutions)</option>\n              <option value="MSU Extension">MSU Extension</option>\n              <option value="Neighborhood Assistance Corporation of America (NACA)">Neighborhood Assistance Corporation of America (NACA)</option>\n              <option value="National Faith Homebuyers">National Faith Homebuyers</option>\n              <option value="NID Housing Counseling Agency">NID Housing Counseling Agency</option>\n              <option value="U-SNAP-BAC">U-SNAP-BAC</option>\n              <option value="Wayne Metropolitan Community Action Agency (Wayne Metro)">Wayne Metropolitan Community Action Agency (Wayne Metro)</option>\n              <option value="Other">Other</option>\n            </select>\n            <div id="agencyNameHelp" class="form-text mb-3">The name of the agency that gave you the homebuyer education certificate.</div>\n            <cod-button data-id="next" data-background-color="primary" data-label="Next" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n          </form>\n          <div>\n            <cod-button data-id="back" data-label="Back" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>\n          </div>\n        </div>\n        ';n.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();this.appContent.querySelector("select").validity.valid&&(this.updateStepStack(t),a.answers.push("pass"),a.setAttribute("data-step","11"))})),this.attachBackButtonEvent(n,a);break;case"11":this.appContent.innerHTML='\n        <div class="row">\n          <p>Have you identified the property you want to receive down payment assistance to purchase?</p>\n        </div>\n        <div class="d-flex">\n          <div class="m-auto">\n            <cod-button data-id="yes" data-label="Yes" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n            <cod-button data-id="no" data-background-color="primary" data-label="No" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n          </div>\n          <div>\n            <cod-button data-id="back" data-label="Back" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>\n          </div>\n        </div>\n        ',e=n.querySelectorAll("cod-button[data-id='yes'], cod-button[data-id='no']"),e.forEach((e=>{e.addEventListener("click",(e=>{null!=e.target.getAttribute("data-label")&&(this.updateStepStack(t),"Yes"==e.target.getAttribute("data-label")?(a.answers.push("pass"),a.setAttribute("data-step","12")):a.setAttribute("data-step","7"))}))})),this.attachBackButtonEvent(n,a);break;case"12":this.appContent.innerHTML='\n        <div class="row">\n          <p>Do you have a purchase agreement?</p>\n        </div>\n        <div class="d-flex">\n          <div class="m-auto">\n            <cod-button data-id="yes" data-label="Yes" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n            <cod-button data-id="no" data-background-color="primary" data-label="No" data-primary="true" data-img-alt="" data-icon=""></cod-button>\n          </div>\n          <div>\n            <cod-button data-id="back" data-label="Back" data-background-color="primary" data-primary="false" data-img-alt="" data-icon=""></cod-button>\n          </div>\n        </div>\n        ',e=n.querySelectorAll("cod-button[data-id='yes'], cod-button[data-id='no']"),e.forEach((e=>{e.addEventListener("click",(e=>{null!=e.target.getAttribute("data-label")&&(this.updateStepStack(t),"Yes"==e.target.getAttribute("data-label")?(a.answers.push("pass"),a.setAttribute("data-step","13")):a.setAttribute("data-step","7"))}))})),this.attachBackButtonEvent(n,a);break;case"13":this.appContent.innerHTML='\n        <div class="row">\n            <p><strong>You are ready to go!</strong></p>\n            <p>Please use the link provided to fill out the application form.</p>\n            <p><em>Note: All incomplete applications would not be process.</em></p>\n        </div>\n        <div class="d-flex">\n          <div class="m-auto">\n            <cod-button data-primary="true" data-disable="undefined" data-label="Start Application" data-img="" data-img-alt="" data-icon="" data-icon-order="" data-icon-size="" data-shape="undefined" data-aria-label="" data-background-color="primary" data-link="https://app.smartsheet.com/b/form/d3275c9107234786ae43285233318c6b"></cod-button>\n          </div>\n        </div>\n        '}}updateStepStack(t){this.stepStack.push(t)}attachBackButtonEvent(t,a){const e=t.querySelector("cod-button[data-id='back']").shadowRoot.querySelector("button");return e.addEventListener("click",(t=>{const e=this.stepStack.pop();a.answers.push("back"),a.setAttribute("data-step",e)})),e}}customElements.define("dpa-survey",d)}},t=>{t.O(0,[160],(()=>{return a=918,t(t.s=a);var a}));t.O()}]);