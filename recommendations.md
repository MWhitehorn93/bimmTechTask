## Recommendations and strategy ##

# Test element recommendations #
An initial recommendation to the product is that the, product has better and more test selectors implemented around the website. The best pratice for selectors on elements is to embed data-cy selectors allthroughout the product. I have attached an example below. These attributes do not affect the functionality of the elements at all. They are merely an latching point for cypress tests. These attributes allow the cypress to interact with the elements in a secure and fast way. 

'data-cy="submit" 