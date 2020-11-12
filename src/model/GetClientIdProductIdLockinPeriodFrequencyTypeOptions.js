

import ApiClient from '../ApiClient';

/**
 * The GetClientIdProductIdLockinPeriodFrequencyTypeOptions model module.
 * @module model/GetClientIdProductIdLockinPeriodFrequencyTypeOptions
 * @version 1.0
 */
class GetClientIdProductIdLockinPeriodFrequencyTypeOptions {
    /**
     * Constructs a new <code>GetClientIdProductIdLockinPeriodFrequencyTypeOptions</code>.
     * @alias module:model/GetClientIdProductIdLockinPeriodFrequencyTypeOptions
     */
    constructor() { 
        
        GetClientIdProductIdLockinPeriodFrequencyTypeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientIdProductIdLockinPeriodFrequencyTypeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientIdProductIdLockinPeriodFrequencyTypeOptions} obj Optional instance to populate.
     * @return {module:model/GetClientIdProductIdLockinPeriodFrequencyTypeOptions} The populated <code>GetClientIdProductIdLockinPeriodFrequencyTypeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientIdProductIdLockinPeriodFrequencyTypeOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetClientIdProductIdLockinPeriodFrequencyTypeOptions.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetClientIdProductIdLockinPeriodFrequencyTypeOptions.prototype['code'] = undefined;

/**
 * @member {Number} description
 */
GetClientIdProductIdLockinPeriodFrequencyTypeOptions.prototype['description'] = undefined;






export default GetClientIdProductIdLockinPeriodFrequencyTypeOptions;

