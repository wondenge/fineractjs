

import ApiClient from '../ApiClient';

/**
 * The FundData model module.
 * @module model/FundData
 * @version 1.0
 */
class FundData {
    /**
     * Constructs a new <code>FundData</code>.
     * @alias module:model/FundData
     */
    constructor() { 
        
        FundData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FundData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundData} obj Optional instance to populate.
     * @return {module:model/FundData} The populated <code>FundData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundData();

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
FundData.prototype['id'] = undefined;

/**
 * @member {String} name
 */
FundData.prototype['name'] = undefined;






export default FundData;

