- [1. Architecture of Multi-service apps](#1-architecture-of-multi-service-apps)
  - [1.1. App overview - Ticketing App](#11-app-overview---ticketing-app)
  - [1.2. Resource Types](#12-resource-types)
  - [1.3. Service Types](#13-service-types)

# 1. Architecture of Multi-service apps
## 1.1. App overview - Ticketing App
- e.g. [https://www.stubhub.com](https://www.stubhub.com)
1. Users can list a ticket for an event (concert, sports) for sale
2. Other users can purchase this ticket
3. Any user can list tickets for sale and purchase ticket
4. When a user attempts to purchase a ticket, the ticket is 'locked' for 15 minutes. The user has 15 mins to enter their payment info.
5. While locked, no other user can purchase the ticket. After 15 minutes, the ticket should 'unlock'.
6. Ticket prices can be edited if they are not locked. 
7. Users can sign-in/sign-out.
8. Users can check their orders in history.
9. Users can insert credit cards (using Stripe) to make a purchase.

## 1.2. Resource Types

`Users`
| Name     | Type   |
| -------- | ------ |
| email    | string |
| password | string |

`Ticket`
| Name    | Type         |
| ------- | ------------ |
| title   | string       |
| price   | number       |
| userId  | Ref to User  |
| orderId | Ref to Order |

`Order`
| Name      | Type                                            |
| --------- | ----------------------------------------------- |
| userId    | Ref to User                                     |
| status    | created, cancelled, awaiting_payment, completed |
| ticketId  | Ref to Ticket                                   |
| expiresAt | Date                                            |

`Charge`
| Name           | Type                       |
| -------------- | -------------------------- |
| orderId        | Ref to Order               |
| status         | created, failed, completed |
| amount         | number                     |
| stripeId       | string                     |
| stripeRefundId | string                     |

## 1.3. Service Types
1. auth
   1. Everything related to user sign-up/sign-in/sign-out
2. tickets
   1. Ticket creation/editing.
   2. Knows wether a ticket can be updated.
3. orders
   1. Order creation/editing.
4. expiration
   1. Watches for orders to be created, cancels them after 15 mins.
5. payments
   1. Handle credit card payments.
   2. Cancels orders if payment fails, completes if payment succeeds. 

<img src="./images/109-events_and_architecture_design.png">

