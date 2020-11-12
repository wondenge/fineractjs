

import ApiClient from '../ApiClient';

/**
 * The GetTaxesComponentsCreditAccountType model module.
 * @module model/GetTaxesComponentsCreditAccountType
 * @version 1.0
 */
class GetTaxesComponentsCreditAccountType {
    /**
     * Constructs a new <code>GetTaxesComponentsCreditAccountType</code>.
     * @alias module:model/GetTaxesComponentsCreditAccountType
     */
    constructor() { 
        
        GetTaxesComponentsCreditAccountType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTaxesComponentsCreditAccountType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTaxesComponentsCreditAccountType} obj Optional instance to populate.
     * @return {module:model/GetTaxesComponentsCreditAccountType} The populated <code>GetTaxesComponentsCreditAccountType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTaxesComponentsCreditAccountType();

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
GetTaxesComponentsCreditAccountType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetTaxesComponentsCreditAccountType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetTaxesComponentsCreditAccountType.prototype['description'] = undefined;






export default GetTaxesComponentsCreditAccountType;

