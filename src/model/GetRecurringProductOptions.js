

import ApiClient from '../ApiClient';

/**
 * The GetRecurringProductOptions model module.
 * @module model/GetRecurringProductOptions
 * @version 1.0
 */
class GetRecurringProductOptions {
    /**
     * Constructs a new <code>GetRecurringProductOptions</code>.
     * @alias module:model/GetRecurringProductOptions
     */
    constructor() { 
        
        GetRecurringProductOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringProductOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringProductOptions} obj Optional instance to populate.
     * @return {module:model/GetRecurringProductOptions} The populated <code>GetRecurringProductOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringProductOptions();

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
GetRecurringProductOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringProductOptions.prototype['name'] = undefined;






export default GetRecurringProductOptions;

