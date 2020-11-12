

import ApiClient from '../ApiClient';

/**
 * The GetLoansTemplateProductOptions model module.
 * @module model/GetLoansTemplateProductOptions
 * @version 1.0
 */
class GetLoansTemplateProductOptions {
    /**
     * Constructs a new <code>GetLoansTemplateProductOptions</code>.
     * @alias module:model/GetLoansTemplateProductOptions
     */
    constructor() { 
        
        GetLoansTemplateProductOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansTemplateProductOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansTemplateProductOptions} obj Optional instance to populate.
     * @return {module:model/GetLoansTemplateProductOptions} The populated <code>GetLoansTemplateProductOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansTemplateProductOptions();

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
GetLoansTemplateProductOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoansTemplateProductOptions.prototype['name'] = undefined;






export default GetLoansTemplateProductOptions;

