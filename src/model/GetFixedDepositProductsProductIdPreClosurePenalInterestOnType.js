

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdPreClosurePenalInterestOnType model module.
 * @module model/GetFixedDepositProductsProductIdPreClosurePenalInterestOnType
 * @version 1.0
 */
class GetFixedDepositProductsProductIdPreClosurePenalInterestOnType {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdPreClosurePenalInterestOnType</code>.
     * @alias module:model/GetFixedDepositProductsProductIdPreClosurePenalInterestOnType
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdPreClosurePenalInterestOnType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdPreClosurePenalInterestOnType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdPreClosurePenalInterestOnType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdPreClosurePenalInterestOnType} The populated <code>GetFixedDepositProductsProductIdPreClosurePenalInterestOnType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdPreClosurePenalInterestOnType();

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
GetFixedDepositProductsProductIdPreClosurePenalInterestOnType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositProductsProductIdPreClosurePenalInterestOnType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsProductIdPreClosurePenalInterestOnType.prototype['description'] = undefined;






export default GetFixedDepositProductsProductIdPreClosurePenalInterestOnType;

