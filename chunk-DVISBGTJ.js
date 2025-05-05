import{_ as v,ba as g,da as m}from"./chunk-XEBEUHT2.js";import{Db as b,Eb as c,Qc as h,Tb as u,Ub as d,X as i,ba as p,db as f,fa as r,mb as s,ra as n}from"./chunk-UK2LV4O3.js";var M=({dt:l})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${l("floatlabel.font.weight")};
    inset-inline-start: ${l("floatlabel.position.x")};
    color: ${l("floatlabel.color")};
    transition-duration: ${l("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${l("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${l("form.field.padding.x")} * 2) + ${l("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${l("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${l("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${l("floatlabel.active.font.size")};
    font-weight: ${l("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${l("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${l("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${l("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${l("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${l("floatlabel.on.border.radius")};
    background: ${l("floatlabel.on.active.background")};
    padding: ${l("floatlabel.on.active.padding")};
}
`,w={root:({instance:l,props:o})=>["p-floatlabel",{"p-floatlabel-over":o.variant==="over","p-floatlabel-on":o.variant==="on","p-floatlabel-in":o.variant==="in"}]},y=(()=>{class l extends g{name="floatlabel";theme=M;classes=w;static \u0275fac=(()=>{let e;return function(a){return(e||(e=n(l)))(a||l)}})();static \u0275prov=i({token:l,factory:l.\u0275fac})}return l})();var $=["*"],V=(()=>{class l extends m{_componentStyle=p(y);variant="over";static \u0275fac=(()=>{let e;return function(a){return(e||(e=n(l)))(a||l)}})();static \u0275cmp=r({type:l,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(t,a){t&2&&s("p-floatlabel",!0)("p-floatlabel-over",a.variant==="over")("p-floatlabel-on",a.variant==="on")("p-floatlabel-in",a.variant==="in")},inputs:{variant:"variant"},standalone:!0,features:[u([y]),f,d],ngContentSelectors:$,decls:1,vars:0,template:function(t,a){t&1&&(b(),c(0))},dependencies:[h,v],encapsulation:2,changeDetection:0})}return l})();export{V as a};
