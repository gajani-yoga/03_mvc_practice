# CRUD Routes
- [x] GET /sharks --> as a user I can see all the sharks
- [x] GET /sharks/:id --> as a user I can see the details for one shark
- [ ] GET /sharks/new
- [x] POST /sharks --> as a user I can create/add a shark
- [ ] GET /sharks/:id/edit
- [x] PATCH /sharks/:id --> as a user I can update sharks' details
- [x] DELETE /sharks/:id --> as a user I can delete a shark

MVC: Model View Controller

## Debugging FLOW
localhost:3000/sharks -> app -> routers -> controllers -> models/DB

## Development FLOW
models/DB -> controllers -> routers -> app -> localhost:3000/sharks

## Endpoints practice
- action: index, verb: GET, endpoint: `/sharks`
- action: show, verb: GET, endpoint: `/sharks/:id`
- action: create, verb: POST, endpoint: `/sharks`
- action: update, verb: PATCH, endpoint: `/sharks/:id`
- action: destroy, verb: DELETE, endpoint: `/sharks/:id`

## Static Methods
- Definition: method called by the class
e.g. Shark.getAll(), Shark.findById(), Shark.create

## Instance Methods
- Definition: method called by an instance

- First we need to define the instance
```js
const shark = Shark.new(data)
const shark = Shark.new({ name: 'Bruce' })

```
- Then we can use them in calling methods
e.g. shark.update(), shark.destroy()