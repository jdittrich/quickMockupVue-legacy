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
	selectedWidget:null,
	mockupwidgets:[
        {
            rect:{
  				top:0,
				left:0,
            	width:1000,
				height:1000
			},
            content:{
                text:"I AM Canvas!",
            },
            l_id:"0",
            children:["1","2"],
            widgetType:"canvas"
        },
        {
            rect:{
				top:100,
				left:100,
      			width:100,
				height:100
			},
            content:{
                 text:"eins",
            },
            l_id:"1",
            children:["3"],
            widgetType: "window",
        },
        {
            rect:{
				top:20,
				left:0,
      			width:100,
	  			height:100
			},
            content:{
                text:"zwei",
            },
            l_id:"2",
            children:[],
            widgetType: "window"
        },
        {
            rect:{
				top:40,
				left:0,
      			width:100,
				height:100
			},
            content:{
                text:"drei",
            },
            l_id:"3",
            children:[],
            widgetType:"button"
        },
	]
};
