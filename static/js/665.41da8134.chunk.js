"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[665],{8026:function(n,e,r){r.d(e,{BD:function(){return x},Gq:function(){return s},II:function(){return u},Mg:function(){return p}});var t,o,a,i,d=r(168),c=r(6822),s=c.Z.form(t||(t=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  padding: 15px;\n"]))),u=c.Z.input(o||(o=(0,d.Z)(["\n  width: 200px;\n  border-radius: 15px;\n  outline: none;\n  border: 1px solid green;\n  padding: 5px;\n  background-color: #ffffff;\n  box-shadow: 1px 2px 6px 0px rgba(65, 33, 83, 0.7);\n\n  @media screen and (max-width: 768px) {\n    width: 250px;\n  }\n\n  &:focus {\n    border-color: #dd00ff;\n  }\n"]))),p=c.Z.button(a||(a=(0,d.Z)(["\n  margin-top: 60px;\n  padding: 4px;\n  width: 30%;\n  height: 100%;\n  border-radius: 15px;\n  background: #a656dc;\n  border: none;\n  &:hover {\n    color: #fff;\n    background-color: #a656dc;\n    box-shadow: 1px 2px 6px 0px rgba(65, 33, 83, 0.7);\n  }\n  box-shadow: 0 2px 4px rgba(65, 33, 83, 0.7);\n"]))),x=c.Z.p(i||(i=(0,d.Z)(["\n  color: red;\n  font-size: 12px;\n  border-radius: 25px;\n  padding: 2px 4px;\n  background-color: #fff;\n"])))},5665:function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var t,o,a,i,d,c,s=r(2791),u=r(9434),p=r(168),x=r(6822),l=x.Z.div(t||(t=(0,p.Z)(["\n  width: 450px;\n  display: flex;\n  justify-content: center;\n  border-radius: 6px;\n  gap: 10px;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n"]))),f=x.Z.input(o||(o=(0,p.Z)(["\n  width: 250px;\n  border-radius: 6px;\n  outline: none;\n  border: 1px solid green;\n  padding: 5px;\n  background-color: #ffffff;\n  box-shadow: 1px 2px 6px 0px rgba(65, 33, 83, 0.7);\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 768px) {\n    & {\n      width: 500px;\n    }\n  }\n\n  &:focus {\n    background-color: #fff;\n\n    color: #750080;\n    border-color: #c800ff;\n  }\n\n  font-size: 18px;\n"]))),m=r(4808),b=r(3329),h=function(){var n=(0,u.I0)(),e=(0,u.v9)((function(n){return n.filter}));return(0,b.jsxs)(l,{children:[(0,b.jsx)("p",{children:"Find contacts by name"}),(0,b.jsx)(f,{name:"search",type:"text",value:e,onChange:function(e){n((0,m.T)(e.currentTarget.value.toLowerCase()))}})]})},g=x.Z.ul(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 15px;\n"]))),Z=x.Z.li(i||(i=(0,p.Z)(["\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  display: flex;\n  justify-content: space-between;\n  color: black;\n  font-weight: 600;\n"]))),w=x.Z.p(d||(d=(0,p.Z)(["\n  margin: 0px;\n  color: rgb(8, 38, 13);\n"]))),j=x.Z.button(c||(c=(0,p.Z)(["\n  padding: 4px;\n  width: 30px;\n  height: 100%;\n  flex-shrink: 0;\n  border-radius: 15px;\n  background: #a656dc;\n  border: none;\n  &:hover {\n    color: #fff;\n    background-color: #a656dc;\n    box-shadow: 1px 2px 6px 0px rgba(65, 33, 83, 0.7);\n  }\n  box-shadow: 0 2px 4px rgba(65, 33, 83, 0.7);\n\n  @media screen and (max-width: 768px) {\n    font-size: 18px;\n    width: 50px;\n  }\n"]))),y=r(3634),v=function(){var n=(0,u.v9)((function(n){return n.contacts.items})),e=(0,u.v9)((function(n){return n.filter})),r=(0,u.I0)(),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,b.jsx)(g,{children:t.map((function(n){var e=n.id,t=n.name,o=n.number;return(0,b.jsxs)(Z,{children:[(0,b.jsxs)(w,{children:[t,": ",o]}),(0,b.jsx)(j,{type:"button",onClick:function(){return r((0,y.GK)(e))}})]},e)}))})},k=r(1413),I=r(887),C=r(4695),q=r(6727),z=r(1686),A=r.n(z),N=r(8026),_=function(n){return n.contacts.items},F=q.Ry().shape({name:q.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),number:q.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Number is required")}).required();function G(){var n=(0,u.v9)(_),e=(0,u.I0)(),r=(0,I.cI)({defaultValues:{name:"",number:""},resolver:(0,C.X)(F)}),t=r.register,o=r.handleSubmit,a=r.reset;return(0,b.jsxs)(N.Gq,{onSubmit:o((function(r){var t=r.name,o=r.number;if(n.find((function(n){return n.name===t})))return A().Notify.failure("".concat(t," is already in contacts."),100);e((0,y.uK)({name:t,number:o})),e((0,m.T)("")),a()})),children:[(0,b.jsx)("label",{htmlFor:"name",children:"Name"}),(0,b.jsx)(N.II,(0,k.Z)((0,k.Z)({},t("name")),{},{type:"text",id:"name",placeholder:"enter the contact name"})),(0,b.jsx)("label",{htmlFor:"number",children:"Number"}),(0,b.jsx)(N.II,(0,k.Z)((0,k.Z)({},t("number")),{},{type:"tel",id:"number",placeholder:"enter the contact number"})),(0,b.jsx)(N.Mg,{type:"submit",children:"Add contact"})]})}var L=function(){var n=(0,u.I0)();return(0,s.useEffect)((function(){n((0,y.yF)())}),[n]),(0,b.jsxs)("section",{children:[(0,b.jsx)(G,{}),(0,b.jsx)(h,{}),(0,b.jsx)(v,{})]})}}}]);
//# sourceMappingURL=665.41da8134.chunk.js.map