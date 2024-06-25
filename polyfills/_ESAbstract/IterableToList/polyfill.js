/* global GetIterator, IteratorStepValue */
// 7.4.11 IterableToList ( items [ , method ] )
function IterableToList(items /*, method */) { // eslint-disable-line no-unused-vars
	// 1. If method is present, then
	// 1.a. Let iteratorRecord be ? GetIterator(items, sync, method).
	// 2. Else,
	// 2.a. Let iteratorRecord be ? GetIterator(items, sync).
	var iteratorRecord = arguments.length > 1
		? GetIterator(items, arguments[1])
		: GetIterator(items);
	// 3. Let values be a new empty List.
	var values = [];
	// 4. Let next be NOT-STARTED.
	var next;
	// 5. Repeat, while next is not DONE,
	while (next !== IteratorStepValue.DONE) {
		// 5.a. Set next to ? IteratorStepValue(iteratorRecord).
		next = IteratorStepValue(iteratorRecord);
		// 5.b. If next is not DONE, then
		if (next !== IteratorStepValue.DONE) {
			// 5.b.i. Append next to the end of the List values.
			values.push(next);
		}
	}
	// 6. Return values.
	return values;
}
