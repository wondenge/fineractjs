

import ApiClient from '../ApiClient';
import GetClientsColumnHeaderData from './GetClientsColumnHeaderData';

/**
 * The GetClientsDataTables model module.
 * @module model/GetClientsDataTables
 * @version 1.0
 */
class GetClientsDataTables {
    /**
     * Constructs a new <code>GetClientsDataTables</code>.
     * @alias module:model/GetClientsDataTables
     */
    constructor() { 
        
        GetClientsDataTables.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsDataTables</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsDataTables} obj Optional instance to populate.
     * @return {module:model/GetClientsDataTables} The populated <code>GetClientsDataTables</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsDataTables();

            if (data.hasOwnProperty('applicationTableName')) {
                obj['applicationTableName'] = ApiClient.convertToType(data['applicationTableName'], 'String');
            }
            if (data.hasOwnProperty('registeredTableName')) {
                obj['registeredTableName'] = ApiClient.convertToType(data['registeredTableName'], 'String');
            }
            if (data.hasOwnProperty('columnHeaderData')) {
                obj['columnHeaderData'] = ApiClient.convertToType(data['columnHeaderData'], [GetClientsColumnHeaderData]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} applicationTableName
 */
GetClientsDataTables.prototype['applicationTableName'] = undefined;

/**
 * @member {String} registeredTableName
 */
GetClientsDataTables.prototype['registeredTableName'] = undefined;

/**
 * @member {Array.<module:model/GetClientsColumnHeaderData>} columnHeaderData
 */
GetClientsDataTables.prototype['columnHeaderData'] = undefined;






export default GetClientsDataTables;

