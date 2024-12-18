using { GWSAMPLE } from './external/GWSAMPLE';

service Product {

    entity ProductSet as select from GWSAMPLE.ProductSet{
        ProductID,
        Description,
        Name,
        Price, WeightMeasure, WeightUnit
    }

}