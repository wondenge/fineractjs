

import ApiClient from '../ApiClient';

/**
 * The GetIncomeType model module.
 * @module model/GetIncomeType
 * @version 1.0
 */
class GetIncomeType {
    /**
     * Constructs a new <code>GetIncomeType</code>.
     * @alias module:model/GetIncomeType
     */
    constructor() { 
        
        GetIncomeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetIncomeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetIncomeType} obj Optional instance to populate.
     * @return {module:model/GetIncomeType} The populated <code>GetIncomeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetIncomeType();

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
GetIncomeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetIncomeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetIncomeType.prototype['description'] = undefined;






export default GetIncomeType;

