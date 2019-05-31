/
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    start () {
        this.node.active = false;
    },

    on_click(){
        this.node.active = !this.node.active;
    }
});
