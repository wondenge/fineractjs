

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsIncomeType model module.
 * @module model/GetSavingsProductsIncomeType
 * @version 1.0
 */
class GetSavingsProductsIncomeType {
    /**
     * Constructs a new <code>GetSavingsProductsIncomeType</code>.
     * @alias module:model/GetSavingsProductsIncomeType
     */
    constructor() { 
        
        GetSavingsProductsIncomeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsIncomeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsIncomeType} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsIncomeType} The populated <code>GetSavingsProductsIncomeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsIncomeType();

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
GetSavingsProductsIncomeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsProductsIncomeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsIncomeType.prototype['description'] = undefined;






export default GetSavingsProductsIncomeType;

