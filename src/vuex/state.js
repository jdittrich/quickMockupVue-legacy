export default  { //should there be a var or whatever...
	title:"myProject",
	elementTemplates:[
		{
			name:"button",
			template:"<div>I AM BUTTON</div>"
		},
		
			name:"window",
			template:"<div>WINDOW, I AM, YODA, TOO, I AM</div>"
		}	
	],	
	canvas:{
		children:[0]
	},
	}
	elements:[{
		text:"I AM Canvas!",
		_id:"0",
		children:["1","2"],
	},
	{
		text:"eins",
		_id:"1",
		children:["3"],
	},
	{
		text:"zwei",
		_id:"2",
		children:[],
	},
	{
		text:"drei",
		_id:"3",
		children:[],
	},
	]
};
