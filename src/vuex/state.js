export default  { //should there be a var?
	title:"myProject",
	widgetTemplates:[
		{
			name:"button",
			templatestring:"<button>I AM BUTTON</button>"
		},
		{
			name:"window",
			templatestring:"<div>WINDOW, I AM, <strong>YODA</strong>, TOO, I AM</div>"
		},
		{
			name:"canvas",
			templatestring:"<div>CANVAS!</div>"
		}
	],
	// canvas:{
	//     dimensions:{x:1000,y:1000},
	//     content:{},
	//     children:["1","2"],
	// 	},
	mockupwidgets:[
        {
            position:{x:0,y:0},
            dimensions:{x:1000,y:1000},
            content:{
                text:"I AM Canvas!",
            },
            l_id:"0",
            children:["1","2"],
            widgetType:"canvas"
        },
        {
            position:{x:0,y:0},
            dimensions:{x:100,y:100},
            content:{
                 text:"eins",
            },
            l_id:"1",
            children:["3"],
            widgetType: "window",
        },
        {
            position:{x:0,y:0},
            dimensions:{x:100,y:100},
            content:{
                text:"zwei",
            },
            l_id:"2",
            children:[],
            widgetType: "window"
        },
        {
            position:{x:0,y:0},
            dimensions:{x:100,y:100},
            content:{
                text:"drei",
            },
            l_id:"3",
            children:[],
            widgetType:"button"
        },
	]
};
