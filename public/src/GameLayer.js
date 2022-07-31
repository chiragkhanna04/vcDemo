var GameLayer = cc.LayerColor.extend({
    ctor:function (gameManager) {
        this.gameManager = gameManager;
        this._super();
        this.setColor(cc.color(255,255,255));
        return true;
    },
    onEnter(){
        this._super();
        let dn  = cc.DrawNode.create();
        this.addChild(dn);
        this.dn = dn;
        this.addTouchListener();
        this.gameManager.setGameLayer(this);
    },
    drawOnGameLayer(data)
    {
      this.dn.drawSegment (data.previousLocation, data.currentLocation, 5, cc.color(0,0,0));
    },
    addTouchListener: function addTouchListener() {
        this._listener = cc.eventManager.addListener({
          event: cc.EventListener.TOUCH_ONE_BY_ONE,
          swallowTouches: true,
          onTouchBegan: this.onTouchBegan,
          onTouchMoved: this.onTouchMoved,
          onTouchEnded: this.onTouchEnded
        }, this);
      },
      onTouchMoved:function(touch, event) {
        var target = event.getCurrentTarget();
        if(target.gameManager.getIsTeacher())
        {
          target.dn.drawSegment (touch.getPreviousLocation(), touch.getLocation(), 5, cc.color(0,0,0));
          let obj = {
            type: SocketEvents.DRAW,
            previousLocation: touch.getPreviousLocation(),
            currentLocation: touch.getLocation()
          }
          target.gameManager.getSocketManager().emitMessage(obj)
          return true;
        }
          
    },
      onTouchBegan: function onTouchBegan(touch, event) {
        var target = event.getCurrentTarget();
        var rect = target.getBoundingBoxToWorld();
        if (cc.rectContainsPoint(rect, touch.getLocation())) {
          return true;
        }
      },
      onTouchEnded: function onTouchBegan(touch, event) {
        var target = event.getCurrentTarget();
        var rect = target.getBoundingBoxToWorld();
      },
});