

import ApiClient from '../ApiClient';

/**
 * The GetClientsSavingProductOptions model module.
 * @module model/GetClientsSavingProductOptions
 * @version 1.0
 */
class GetClientsSavingProductOptions {
    /**
     * Constructs a new <code>GetClientsSavingProductOptions</code>.
     * @alias module:model/GetClientsSavingProductOptions
     */
    constructor() { 
        
        GetClientsSavingProductOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsSavingProductOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsSavingProductOptions} obj Optional instance to populate.
     * @return {module:model/GetClientsSavingProductOptions} The populated <code>GetClientsSavingProductOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsSavingProductOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('withdrawalFeeForTransfers')) {
                obj['withdrawalFeeForTransfers'] = ApiClient.convertToType(data['withdrawalFeeForTransfers'], 'Boolean');
            }
            if (data.hasOwnProperty('allowOverdraft')) {
                obj['allowOverdraft'] = ApiClient.convertToType(data['allowOverdraft'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetClientsSavingProductOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetClientsSavingProductOptions.prototype['name'] = undefined;

/**
 * @member {Boolean} withdrawalFeeForTransfers
 */
GetClientsSavingProductOptions.prototype['withdrawalFeeForTransfers'] = undefined;

/**
 * @member {Boolean} allowOverdraft
 */
GetClientsSavingProductOptions.prototype['allowOverdraft'] = undefined;






export default GetClientsSavingProductOptions;

