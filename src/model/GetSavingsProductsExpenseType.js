

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsExpenseType model module.
 * @module model/GetSavingsProductsExpenseType
 * @version 1.0
 */
class GetSavingsProductsExpenseType {
    /**
     * Constructs a new <code>GetSavingsProductsExpenseType</code>.
     * @alias module:model/GetSavingsProductsExpenseType
     */
    constructor() { 
        
        GetSavingsProductsExpenseType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsExpenseType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsExpenseType} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsExpenseType} The populated <code>GetSavingsProductsExpenseType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsExpenseType();

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
GetSavingsProductsExpenseType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsProductsExpenseType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsExpenseType.prototype['description'] = undefined;






export default GetSavingsProductsExpenseType;

