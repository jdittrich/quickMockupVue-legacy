export default  { //should there be a var?
	title:"myProject",
	widgetTemplates:[
		{   //why cw...? if you have button and there is a button in your button template you get recursion to inifinity
			// or maybe they should just get some random gibberish as name; we can still show the user a human readable name
			name:"cwbutton",
			templatestring:'Testtext <button><widgetinlineedit :text="content.buttontitle" :content="content">huhu</widgetinlineedit></button> ',
			content:{buttontitle:"qwertz"}
		},
		{
			name:"cwwindow",
			templatestring:'<div>WINDOW,I AM, <strong>YODA</strong>, TOO, I AM <widgetinlineedit :text="content.windowtitle">huhu</widgetinlineedit><widgetList :list="content.list">list!<li v-for="item in content.list" track-by="$index"><widgetInlineEdit :text="item">bla</widgetinlineedit>he:{{$index}}</li></widgetlist></div>',
			content:{windowtitle:"heho", list:["listitem1","listitem2"]}
			//if I pass only text, it is hard to mutate it (?) via vuex (since text is passed on copy). So I either pass object which I can easier change in vuex or I let the widget handle the changes of .content? See if vue 2.0 still allows passing events to parents.
		},
		{
			name:"cwcanvas",
			templatestring:'<div>CANVAS!</div>' //<div onclick="alert()"> ...any you are pawnd. Bad
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
            widgetType:"cwcanvas"
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
            widgetType: "cwwindow",
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
				list:["zweieins","zweizwei","zweidrei"]
            },
            l_id:"2",
            children:[],
            widgetType: "cwwindow"
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
            widgetType:"cwbutton"
        },
	]
};
