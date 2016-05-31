export default  { //should there be a var?
	title:"myProject",
	widgetTemplates:[
		{
			name:"button",
			template:"<button>I AM BUTTON</button>"
		},
		{
			name:"window",
			template:"<div>WINDOW, I AM, <strong>YODA</strong>, TOO, I AM</div>"
		}
	],
	canvas:{
    dimensions:{x:1000,y:1000},
    content:{},
    children:["1","2"]
	},
	mockupwidgets:[
        {
            position:{x:0,y:0},
            dimensions:{x:1000,y:1000},
            content:{
                text:"I AM Canvas!",
            },
            _id:"0",
            children:["1","2"],
            widgetType:"button"
        },
        {
            position:{x:0,y:0},
            dimensions:{x:100,y:100},
            content:{
                 text:"eins",
            },
            _id:"1",
            children:["3"],
            widgetType: "window",
        },
        {
            position:{x:0,y:0},
            dimensions:{x:100,y:100},
            content:{
                text:"zwei",
            },
            _id:"2",
            children:[],
            widgetType: "window"
        },
        {
            position:{x:0,y:0},
            dimensions:{x:100,y:100},
            content:{
                text:"drei",
            },
            _id:"3",
            children:[],
            widgetType:"button"
        },
	]
};
