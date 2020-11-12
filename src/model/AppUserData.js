

import ApiClient from '../ApiClient';
import ClientData from './ClientData';

/**
 * The AppUserData model module.
 * @module model/AppUserData
 * @version 1.0
 */
class AppUserData {
    /**
     * Constructs a new <code>AppUserData</code>.
     * @alias module:model/AppUserData
     */
    constructor() { 
        
        AppUserData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppUserData} obj Optional instance to populate.
     * @return {module:model/AppUserData} The populated <code>AppUserData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppUserData();

            if (data.hasOwnProperty('rowIndex')) {
                obj['rowIndex'] = ApiClient.convertToType(data['rowIndex'], 'Number');
            }
            if (data.hasOwnProperty('clients')) {
                obj['clients'] = ApiClient.convertToType(data['clients'], [ClientData]);
            }
            if (data.hasOwnProperty('selfServiceUser')) {
                obj['selfServiceUser'] = ApiClient.convertToType(data['selfServiceUser'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} rowIndex
 */
AppUserData.prototype['rowIndex'] = undefined;

/**
 * @member {Array.<module:model/ClientData>} clients
 */
AppUserData.prototype['clients'] = undefined;

/**
 * @member {Boolean} selfServiceUser
 */
AppUserData.prototype['selfServiceUser'] = undefined;






export default AppUserData;

