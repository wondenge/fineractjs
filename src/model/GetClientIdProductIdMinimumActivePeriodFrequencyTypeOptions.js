

import ApiClient from '../ApiClient';

/**
 * The GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions model module.
 * @module model/GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions
 * @version 1.0
 */
class GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions {
    /**
     * Constructs a new <code>GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions</code>.
     * @alias module:model/GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions
     */
    constructor() { 
        
        GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions} obj Optional instance to populate.
     * @return {module:model/GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions} The populated <code>GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions();

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
GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions.prototype['code'] = undefined;

/**
 * @member {Number} description
 */
GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions.prototype['description'] = undefined;






export default GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions;

