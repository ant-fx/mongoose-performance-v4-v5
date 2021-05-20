## Sample project showing the performance issue from Mongoose 4.x to 5.x

When loading a large number of records for fairly complex schemas Mongoose 5.x takes significantly longer than Mongoose 4.x.

### Steps to reproduce

1. Clone this repo
2. Install modules (`npm i`)
3. Build test data (`npm run build`)
4. Test with Mongoose v4.x (`npm run test-v4`)
4. Test with Mongoose v5.x (`npm run test-v5`)

On my development machine the v4.x test takes approx 4.7s to run and the v5.x test takes approx 16s to run.
