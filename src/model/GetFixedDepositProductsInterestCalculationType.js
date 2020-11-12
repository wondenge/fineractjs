

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsInterestCalculationType model module.
 * @module model/GetFixedDepositProductsInterestCalculationType
 * @version 1.0
 */
class GetFixedDepositProductsInterestCalculationType {
    /**
     * Constructs a new <code>GetFixedDepositProductsInterestCalculationType</code>.
     * @alias module:model/GetFixedDepositProductsInterestCalculationType
     */
    constructor() { 
        
        GetFixedDepositProductsInterestCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsInterestCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsInterestCalculationType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsInterestCalculationType} The populated <code>GetFixedDepositProductsInterestCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsInterestCalculationType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFixedDepositProductsInterestCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositProductsInterestCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsInterestCalculationType.prototype['description'] = undefined;






export default GetFixedDepositProductsInterestCalculationType;

