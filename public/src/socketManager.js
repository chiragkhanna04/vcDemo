class SocketManager {
    constructor(gameManager) {
        this.gameManager = gameManager;
        this.initSocketListeners();
        this.room = room;
    }
    initSocketListeners() {
        var that = this;
        socket.on('message', function (message, room) {
            that.handleSocketMessages(message)
        });
    }
    handleSocketMessages(message) {
        switch (message.type) {
            case SocketEvents.SET_ROOM:
                break;
            case SocketEvents.STUDENT_JOINED:
                this.gameManager.setIsTeacher(true);
                break;
            case SocketEvents.DRAW:
                this.gameManager.draw(message)
                break;
            default:
                break;
        }
    }
    emitMessage(obj)
    {
        socket.emit('message', obj, this.room);
    }
}

