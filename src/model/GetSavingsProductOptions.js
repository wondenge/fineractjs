

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductOptions model module.
 * @module model/GetSavingsProductOptions
 * @version 1.0
 */
class GetSavingsProductOptions {
    /**
     * Constructs a new <code>GetSavingsProductOptions</code>.
     * @alias module:model/GetSavingsProductOptions
     */
    constructor() { 
        
        GetSavingsProductOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductOptions} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductOptions} The populated <code>GetSavingsProductOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsProductOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductOptions.prototype['name'] = undefined;






export default GetSavingsProductOptions;

