export function getHighestMessageId(messages) {
    const highestMessageId = messages?.reduce((acc, curr) => {
        if (curr.id > acc.id) {
            return curr;
          } else {
            return acc;
          }
    })

    return highestMessageId
}