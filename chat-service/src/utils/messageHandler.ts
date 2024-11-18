import { UserStatus } from "./userStatus";
import { rabbitMQService } from "../services/RabbitMQService";

const userStatus = UserStatus.getInstance();

export const handleMessageReceived = async (
  senderName: string,
  senderEmail: string,
  receiverId: string,
  messageContent: string
) => {
  const receiverIsOffline = !userStatus.isUserOnline(receiverId);

  if (receiverIsOffline) {
    await rabbitMQService.notifyReceiver(
      receiverId,
      messageContent,
      senderEmail,
      senderName
    );
  }
};
