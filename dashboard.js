class Dashboard{
    
    constructor( sidebar,  content){
        this.sidebar = sidebar;
        this.content = content;
    }


    render(Home,Account,Message,Support){
            this.handler(Home);
            this.handler(Account);
            this.handler(Message);
            this.handler(Support);
    }
    handler(module){
        document.getElementById(this.sidebar).innerHTML =`<div class="w3-sidebar w3-bar-block w3-light-grey w3-card" style="width:160px;">
                                                    <button id="Home" class="w3-button w3-block w3-left-align " onclick="handler(this.id)">
                                                    Home </button>    <button id="Account"  class="w3-button w3-block w3-left-align " onclick="handler(this.id)">
                                                    Account </button>
                                                
                                                    <button id="Message"  class="w3-button w3-block w3-left-align " onclick="handler(this.id)">
                                                    Message </button>
                                                
                                                    <button id="Support"  class="w3-button w3-block w3-left-align " onclick="handler(this.id)">
                                                    Support </button> `
    
        
        document.getElementById(this.content).innerHTML = `  <div class="w3-container" style="margin-left:160px">
                                                        <h2 id="msg" >Welcome to  DashBoard ! </h2>
                                                        </div>`;
    
    }

}




function makechanges(id){
    document.getElementById('msg').innerHTML = id;
    var y = document.getElementsByTagName('button');
    
    for(let i=0; i<4; i++){
        if(y[i].id === id){
           
        }
        else{
            y[i].classList.remove('active-btn');
        }

    }
}


function handler(id){
document.getElementById(id).classList.add('active-btn');
makechanges(id);
}

























/*


render() {

    return document.getElementById('sidebar').innerHTML=`<div class="w3-sidebar w3-bar-block w3-light-grey w3-card" style="width:160px;">
   
    <button id="Home" class="w3-button w3-block w3-left-align " onclick="handler(this.id)">
    Home </button>
    
    <button id="Account"  class="w3-button w3-block w3-left-align " onclick="handler(this.id)">
    Account </button>

    <button id="Message"  class="w3-button w3-block w3-left-align " onclick="handler(this.id)">
    Message </button>

    <button id="Support"  class="w3-button w3-block w3-left-align " onclick="handler(this.id)">
    Support </button>
  

    </div>
    <a href="#" class="w3-bar-item w3-button">Link 2</a>
    <a href="#" class="w3-bar-item w3-button">Link 3</a>
  </div>
  
  <div class="w3-container" style="margin-left:160px">
  <h2 id="msg" >Welcome to Dashboard</h2>
  </div>
`
  }










function makechanges(id){
        document.getElementById('msg').innerHTML = id;
        var y = document.getElementsByTagName('button');
        
        for(let i=0; i<4; i++){
            if(y[i].id === id){
                console.log(y[i]);
            }
            else{
                y[i].classList.remove('active-btn');
            }

        }
    }


function handler(id){
    document.getElementById(id).classList.add('active-btn');
    makechanges(id);
}




*/