class GameManager {
    constructor()
    {
        this.isTeacher = false;
    }
    setIsTeacher()
    {
        this.isTeacher = true;
    }
    getIsTeacher()
    {
        return this.isTeacher;
    }
    setSocketListener(socketManager)
    {
        this.socketManager = socketManager;
    }
    getSocketManager()
    {
        return this.socketManager;
    }
    setGameLayer(gameLayer)
    {
        this.gameLayer = gameLayer;
    }
    draw(data)
    {
        this.gameLayer.drawOnGameLayer(data)
    }
    
}