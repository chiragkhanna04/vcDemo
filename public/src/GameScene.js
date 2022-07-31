var GameScene = cc.Scene.extend({
    ctor: function(gameManager)
    {
        this._super();
        this.gameManager = gameManager;
    },
    onEnter:function () {
        this._super();
        var layer = new GameLayer(this.gameManager);
        this.addChild(layer);
    }
});
