
cc.Class({
    extends: cc.Component,

    properties: {
        stack: [cc.Node],
        top: -1,
    },

    onLoad () {
        var ctx = this.node.getComponent(cc.Graphics);
            ctx.clear();
            ctx.rect(-250, -250, 500, 500);
            ctx.stroke();
            ctx.fill();
    },

    push(graph){
        this.top += 1;
        this.stack[this.top] = graph;
        cc.log('push');
        cc.log(typeof(graph));
    },

    pop(){
        if (this.top >= 0){
            cc.log('pop');
            cc.log(typeof(this.stack[this.top]));
            this.stack[this.top].active = false;
            this.top -= 1;
        }
    },

    changeColor (event,color) {
    	if(color == 1){
    	    this.node.color = cc.Color.RED;
    	}
    	else if(color == 2){
    	    this.node.color = cc.Color.YELLOW;
    	}
    	else if(color == 3){
    	    this.node.color = cc.Color.BLUE;
    	}
    	else if(color == 4){
    	    this.node.color = cc.Color.ORANGE;
    	}
    	else if(color == 5){
    	    this.node.color = cc.Color.CYAN;
    	}
    	else if(color == 6){
    	    this.node.color = cc.Color.MAGENTA;
    	}
    	else if(color == 7){
    	    this.node.color = cc.Color.GREEN;
    	}
    	else if(color == 8){
    	    this.node.color = cc.Color.WHITE;
    	}
    },

    changeShape: function(event, shape){
        
        var self = this;
        if(shape == 1){
            var ctx = this.node.getComponent(cc.Graphics);
            ctx.clear();
            ctx.rect(-250, -250, 500, 500);
            ctx.stroke();
            ctx.fill();
        }
        else if(shape == 2){
            var ctx = this.node.getComponent(cc.Graphics);
            ctx.clear();
            ctx.circle(0, 0, 250);
            ctx.stroke();
            ctx.fill();
        }
        
    },

    start () {

    },

    // update (dt) {},
});
