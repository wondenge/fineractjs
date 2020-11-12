

import ApiClient from '../ApiClient';

/**
 * The GetSelfLoansProductOptions model module.
 * @module model/GetSelfLoansProductOptions
 * @version 1.0
 */
class GetSelfLoansProductOptions {
    /**
     * Constructs a new <code>GetSelfLoansProductOptions</code>.
     * @alias module:model/GetSelfLoansProductOptions
     */
    constructor() { 
        
        GetSelfLoansProductOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfLoansProductOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfLoansProductOptions} obj Optional instance to populate.
     * @return {module:model/GetSelfLoansProductOptions} The populated <code>GetSelfLoansProductOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfLoansProductOptions();

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
GetSelfLoansProductOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSelfLoansProductOptions.prototype['name'] = undefined;






export default GetSelfLoansProductOptions;

